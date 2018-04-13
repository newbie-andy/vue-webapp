<template>
  <div class="zhang">
    <ol>
        <li v-for="(content, index) in getData" :key="index">
            {{ content.title }}
        </li>
    </ol>
  </div>
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
              img {
                height: 100%;
                max-width: px2rem(200px);
              }
              div {
                display: flex;
                align-items: flex-start;
              }
          }
      }
  }
</style>


