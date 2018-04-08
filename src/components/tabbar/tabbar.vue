<template>
    <div id="tabbar" ref="wrapper">
        <ul class="content">
            <li v-for="(link, index) in links" :key="index">
                <router-link class="page-head-link" to="/channel/chain">{{ link }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        data() {
            return {
                links: []
            }
        },
        created() {
            this.$http({
                method: 'post',
                url: '/api/channel',
                params: {
                    appkey: '1e58cd8eefb3ed489f9f3ddc00ad5486'
                }
            }).then((res) => {
                console.log(res);
                if(!!res.status) {
                    this.links = res.data.result.result;
                    console.log(this.links);
                }else{
                    console.log('soory, 服务器暂时没有数据');
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {
                    scrollX: true,
                    click: true,
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
        ul {
            display: flex;
            flex-direction: row;
            li a.page-head-link {
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
        }
    }
</style>
