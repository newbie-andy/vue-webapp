<template>
  <div class="lists" ref="news">
      <ul class="content">
          <li v-for="(content, index) in news" :key="index" @click="showDetailNewsPage(content.newsId)">
              <div class="img-box" v-if="content.newsImg">
                  <img v-lazy="content.newsImg" >
              </div>
              <article :class="{'confirm-height': content.newsImg}">
                <p>{{ content.title }}</p>
                <div>
                    <span class="category" v-if="content.source">{{ content.source }}</span>
                    <!-- <span class="source" v-if="content.source">{{ content.source }}</span> -->
                    <span class="time" v-if="content.publishTime">{{ content.publishTime }}</span>
                </div>
              </article>
          </li>
      </ul>
      <newsDetail :new-detail="newsDetailConfig" @canCcroll="enable"></newsDetail>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import NewsDetail from '../detail/detail';
export default {
  data() {
      // https://way.jd.com/
    // url: '/api/jisuapi/channel',
      return {
        config: {
            newsParams: {
                method: 'POST',
                url: '/api/zhixunkeji/sjzh1011',
                params: {
                    category: '',
                    updateTime: '',
                    page: 1,
                    appkey: '1e58cd8eefb3ed489f9f3ddc00ad5486',
                }
            }
        },
        news: [],
        newsDetailConfig: {
            newsdetail: {},
            isShow: false
        }
      }
  },
  mounted() {
      let channels = localStorage.getItem('channels');
      this.links = JSON.parse(channels);
      this.config.newsParams.params.category = (this.links)[0];
      this.config.newsParams.params.updateTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
      this.fetchNews(this.config.newsParams);
      this.$nextTick(() => {
          this.initScroll();
      })
  },
  watch: {
    '$route': 'fetchNewsStart'
  },
  methods: {
    initScroll() {
        this.scroll = new Bscroll(this.$refs.news, {
            startY: 0,
            scrollY: true,
            click: true,
            bounce:true,//超出部分会有动画，默认值为true
            bounceTime: 500,//回弹动画的时间，默认值为800
            momentum: true,//计算动量，默认值为true
            resizePolling: 60,//窗口的尺寸发生改变，需要对better-scroll做重新计算,
            probeType: 2,
            pullUpLoad: {
                threshold: 50,
                stop: 20
            }
        });
        this.scroll.on('pullingUp', () => {
            this.config.newsParams.params.page = this.config.newsParams.params.page + 1;
            console.log(this.config.page);
            this.fetchNews(this.config.newsParams);
            this.scroll.finishPullUp();
        })
    },
    disable() {
        this.scroll && this.scroll.disable()
    },
    enable() {  
        this.scroll && this.scroll.enable()
    },
    fetchNews(config) {
      this.$http(config).then((res) => {
            if(res.data.code == 10000) {
              this.news = this.news.concat(res.data.result.result.newsList);
            }else if(res.data.code == 11010){
                console.log(res.data.msg);
            }
        }).catch((error) => {
            console.log(error);
        });
    },
    fetchNewsStart() {
        this.config.newsParams.params.page = 1;
        this.config.newsParams.params.category = this.$route.params.type;
        this.news = [];
        this.fetchNews(this.config.newsParams);
    },
    showDetailNewsPage(newId) {
        console.log(newId);
        this.$http({
                method: 'POST',
                url: '/api/zhixunkeji/sjzh1012',
                params: {
                    newsId: newId,
                    appkey: '1e58cd8eefb3ed489f9f3ddc00ad5486',
                }
            }).then((res) => {
            if(res.data.code == 10000) {
                this.disable();
                this.newsDetailConfig.newsdetail = res.data.result.result;
                this.newsDetailConfig.isShow = true;
            }else if(res.data.code == 11010){
                console.log(res.data.msg);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
  },
  components: {
    NewsDetail
  }
}
</script>

<style lang="scss" scoped>
  .lists {
    width: 100%;
    margin-top: px2rem(42px);
    overflow: hidden;
    ul {
          display: flex;
          flex-direction: column;
          li {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              box-sizing: border-box;
              font-size: px2rem(18px);
              white-space:nowrap;
              padding: px2rem(10px) px2rem(10px);
              text-decoration: none;
              border-bottom: 1px solid rgba(0,0,0,0.2);
              color: #000000;
              background: #ffffff;
              .img-box {
                height: px2rem(120px);
                width: px2rem(110px);
                overflow: hidden;
                img {
                    height: 100%;
                    min-width: 100%;
                }
              }
              article {
                height: inherit;
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content:space-between;
                box-sizing: border-box;
                align-items: flex-start;
                padding: px2rem(10px) 0 px2rem(10px) px2rem(10px);
                font-size: px2rem(16px); 
                overflow: hidden;
                &.confirm-height {
                    height: px2rem(120px);
                    div {
                        margin-top: 0;
                    }
                }
                p {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                div {
                    margin-top: px2rem(20px); 
                    font-size: px2rem(14px);
                    .category {
                        padding: px2rem(2px) px2rem(4px);
                        background: #3D5AFE;
                        color: #ffffff;
                        border: none;
                        border-radius: px2rem(4px);
                    }
                }
              }
          }
      }
  }
</style>


