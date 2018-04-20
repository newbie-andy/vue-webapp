<template>
    <transition name="to-left">
        <article class="new-detail" v-if="getData.isShow">
            <h3>{{ getData.newsdetail.title }}</h3>
            <p>
                <span v-if="getData.newsdetail.src">{{ getData.newsdetail.src }}</span>
                <span v-if="getData.newsdetail.time">{{ getData.newsdetail.time }}</span>
            </p>
            <section>
                <img v-if="getData.newsdetail.pic" :src="getData.newsdetail.pic" alt=""/>
                <div v-html="getData.newsdetail.content"></div>
            </section>
        </article>
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
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
    .new-detail {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        padding: px2rem(40px) px2rem(10px);
        overflow: scroll;
        background: #fff;
        z-index: 2000;
        h3 {
            text-align: center;
            font-weight: bold;
            font-size: px2rem(15px);
        }
        p {
            text-align: center;
            padding: px2rem(15px) 0;
            font-size: px2rem(10px);
        }
        section {
            width: 100%;
            line-height: px2rem(20px);
            font-size: px2rem(13px);
            img {
                min-width: 100%;
            }
        }
    }
    .to-left-enter {
        left: 0;
        top: 100vw;
    }
    .to-left-enter-active {
        transition: all .3s ease;
    }
</style>


