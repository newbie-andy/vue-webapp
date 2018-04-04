<template>
    <div id="tabbar" ref="wrapper">
        <ul class="content">
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">教育</router-link></li>
            <li><router-link class="page-head-link" to="home/channel/sport">财经</router-link></li>
        </ul>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {
                    scrollX: true,
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    #tabbar {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        overflow: hidden;
        height: px2rem(42px);
        background: #ffffff;
    }
    #tabbar ul {
        display: flex;
        flex-direction: row;
    }
    #tabbar ul li a.page-head-link {
        height: px2rem(42px);
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        box-sizing: border-box;
        font-size: px2rem(18px);
        white-space:nowrap;
        padding: 0 px2rem(10px);
        text-decoration: none;
        color: #000000;
    }
</style>
