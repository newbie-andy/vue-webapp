<template>
  <div class="lists" ref="news">
      <ul class="content">
          <li v-for="(content, index) in news" :key="index">
              <div class="img-box" v-if="content.pic">
                  <img :src="content.pic" alt="">
              </div>
              <article :class="{'confirm-height': content.pic}">
                <p>{{ content.title }}</p>
                <div>
                    <span class="category">{{ content.category }}</span>
                    <span class="src">{{ content.src }}</span>
                    <span class="time">{{ content.time }}</span>
                </div>
              </article>
          </li>
      </ul>
      <newsDetail :new-detail="news"></newsDetail>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import NewsDetail from '../detail/detail';
export default {
  data() {
      return {
        news: []
      }
  },
  mounted() {
      this.fetchNews();
      this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.news, {
              scrollY: true,
              tap: true,
              bounce:true,//超出部分会有动画，默认值为true
              bounceTime: 500,//回弹动画的时间，默认值为800
              momentum: true,//计算动量，默认值为true
              resizePolling: 60,//窗口的尺寸发生改变，需要对better-scroll做重新计算
          })
      })
  },
  watch: {
    '$route': 'fetchNews'
  },
  methods: {
    fetchNews() {
      this.$http({
            method: 'POST',
            url: '/api/jisuapi/get',
            params: {
                channel: this.$route.params.type,
                mun: 10,
                start: 0,
                appkey: '1e58cd8eefb3ed489f9f3ddc00ad5486',
            }
        }).then((res) => {
            console.log(res);
            if(res.data.code == 10000) {
              console.log(res.data.result.result.list);
              this.news = res.data.result.result.list;
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


