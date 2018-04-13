<template>
  <div class="lists" ref="news">
      <ul class="content">
          <li v-for="(content, index) in news" :key="index">
              <div class="img-box" v-if="content.pic">
                  <img :src="content.pic" alt="">
              </div>
              <article>
                <p>{{ content.title }}</p>
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
      this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.news, {
              scrollY: true,
              click: true,
          })
          //再dom更新之后进行执行函数
          this.fetchNews();
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
              height: px2rem(120px);
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
                position: relative;
                height: 100%;
                width: px2rem(110px);
                overflow: hidden;
                img {
                    position: absolute;
                    width: 100%;
                    min-height: 100%;
                }
              }
              article {
                display: flex;
                flex: 1;
                align-items: flex-start;
                overflow: hidden;
              }
          }
      }
  }
</style>


