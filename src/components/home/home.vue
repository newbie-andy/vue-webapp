<template>
    <div class="home">
        <tabbar ref="wrapper"></tabbar>
        <router-view/>
    </div>
</template>

<script>
    import Tabbar from '../tabbar/tabbar';
    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        components: {
            tabbar: Tabbar
        }
    }
</script>

<style lang="scss" scoped>

</style>
