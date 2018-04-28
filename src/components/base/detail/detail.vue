<template>
    <transition name="to-left">
        <div class="news-detail" v-show="getData.isShow">
            <div class="header-bar">
                <i class="iconfont icon-undo back" @click="BackToPrev"></i>
            </div>
            <article class="new-detail">
                <h3>{{ getData.newsdetail.title }}</h3>
                <p>
                    <span v-if="getData.newsdetail.src">{{ getData.newsdetail.src }}</span>
                    <span v-if="getData.newsdetail.time">{{ getData.newsdetail.time }}</span>
                </p>
                <section class="content">
                    <img v-if="getData.newsdetail.pic" :src="getData.newsdetail.pic" alt=""/>
                    <div v-html="getData.newsdetail.content"></div>
                </section>
            </article>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'newsDetail',
  props: ['newDetail'],
  data() {
      return {
          
      }
  },
  computed: {
      //对于异步的数据我们要进行监听，计算
      getData: function() {
          return this.newDetail
      }
  },
  created: function() {
      
  },
  watch: {
    '$route': 'BackToPrev'//监听路由的变化使当前覆盖的界面移除
  },
  methods: {
      BackToPrev() {
          this.getData.isShow = false;
          this.$emit('canCcroll');
      }
  }
}
</script>

<style lang="scss" scoped>
    .news-detail {
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        overflow: scroll;
        background: #fff;
        z-index: 2000;
        .header-bar {
            width: 100vw;
            height: px2rem(60px);
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 px2rem(10px);
            i.back {
                display: flex;
                justify-content: center;
                align-items: center;
                width: px2rem(30px);
                height: px2rem(30px);
                border-radius: 50%;
                background: rgba(0,0,0,0.7);
                color: #fff;
                font-size: px2rem(12px) !important;
                -webkit-tap-highlight-color: rgba(0,0,0,1);
            }
        }
        .new-detail {
            box-sizing: border-box;
            padding: 0 px2rem(10px) px2rem(35px);
            h3 {
                text-align: center;
                font-weight: bold;
                font-size: px2rem(16px);
            }
            p {
                text-align: center;
                padding: px2rem(15px) 0;
                font-size: px2rem(10px);
            }
            section.content {
                width: 100%;
                line-height: px2rem(20px);
                font-size: px2rem(10px) !important;
                img {
                    width: 100%;
                }
            }
        }
    }
    //页面出现、移除的动画效果
    .to-left-enter {
        left: 0;
        top: 100vw;
    }
    .to-left-enter-active {
        transition: all .2s ease;
    }

    .to-left-leave-active {
        transition: all .3s ease;
    }
    .to-left-leave-to {
        opacity: 0;
    }
</style>


