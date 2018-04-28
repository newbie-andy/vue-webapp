<template>
  <div id="app">
    <keep-alive>
      <router-view class="main"/>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
import Tab from './components/tab/tab';
import './assets/js/rootfont.js';
import Common from './assets/js/common.js';
export default {
  name: 'App',
  components: {
    tab: Tab
  }
}
</script>

<style lang="scss">
  html,body {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
  }
  #home, .main, #mine {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #tabs {
    display: flex;
    height: px2rem(50px);
    width: 100%;
    font-size: px2rem(12px);
    border-top: 1px solid #dddddd;
    background: #ffffff;
    z-index: 1000;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    height: 100vh;
  }
    
</style>
