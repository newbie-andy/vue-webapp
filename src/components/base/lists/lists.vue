<template>
  <div class="lists" ref="news">
      <ul class="content">
          <li v-for="(content, index) in news" :key="index" @click="showDetailNewsPage(content)">
              <div class="img-box" v-if="content.pic">
                  <img v-lazy="content.pic" >
              </div>
              <article :class="{'confirm-height': content.pic}">
                <p>{{ content.title }}</p>
                <div>
                    <span class="category" v-if="content.category">{{ content.category }}</span>
                    <span class="src" v-if="content.src">{{ content.src }}</span>
                    <span class="time" v-if="content.time">{{ content.time }}</span>
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
            page: 0,
            newsParams: {
                method: 'POST',
                url: '/api/jisuapi/get',
                params: {
                    channel: '',
                    mun: 10,
                    start: 0,
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
            this.config.newsParams.params.start = (++this.config.page) * this.config.newsParams.params.mun + 1;
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
              this.news = this.news.concat(res.data.result.result.list);
            }else if(res.data.code == 11010){
                console.log(res.data.msg);
            }
        }).catch((error) => {
            console.log(error);
        });
    },
    fetchNewsStart() {
        this.config.page = 0;
        console.log(this.$route.params.type);
        this.config.newsParams.params.channel = this.$route.params.type;
        this.config.newsParams.params.start = 0;
        this.news = [];
        this.fetchNews(this.config.newsParams);
    },
    showDetailNewsPage(newsdetail) {
        this.disable();
        this.newsDetailConfig = {
            newsdetail: newsdetail,
            isShow: true
        };  
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


