<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
import Tab from './components/tab/tab';
import './assets/js/rootfont.js';
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
  #tabs {
    height: px2rem(60px);
  }
  #app {
    min-width: 100%;
    min-width: 100%;
  }
    
</style>
