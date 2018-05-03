<template>
    <div id="tabbar" ref="wrapper">
        <ul class="content">
            <li v-for="(link, index) in links" :key="index">
                <router-link class="page-head-link" :to="{ name: 'channel', params: { type: link }}">{{ link }}</router-link>
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
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {
                    scrollX: true,
                    click: true,
                })
            })
        },
        activated() {
            //这里我们用这个生命周期是由于activated能监听组建的激活与否状态
            this.getNewsByType();
        },
        methods: {
            getNewsByType: function() {
                //判断是否存在缓存的数据
                let channels = localStorage.getItem('channels');
                if(channels) {
                    this.links = JSON.parse(channels);
                    this.$router.replace({ name: 'channel', params: { type: this.links[0] }});
                }else{
                    this.$http({
                        method: 'post',
                        // https://way.jd.com/
                        url: '/api/jisuapi/channel',
                        // url: 'https://way.jd.com/jisuapi/channel',
                        params: {
                            appkey: '1e58cd8eefb3ed489f9f3ddc00ad5486'
                        }
                    }).then((res) => {
                        console.log(res);
                        if(res.data.code == 10000) {
                            this.links = res.data.result.result;
                            //设置缓存
                            localStorage.setItem('channels', JSON.stringify(this.links));
                            console.log(this.links);
                            this.$router.push({ name: 'channel', params: { type: this.links[0] }});
                        }else if(res.data.code == 11010){
                            console.log(res.data.msg);
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #tabbar {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        overflow: hidden;
        height: px2rem(42px);
        background: #ffffff;
        box-shadow: 0 2px 3px rgba(0,0,0,0.3), 0 4px 5px rgba(0,0,0,0.1);
        z-index: 1000;
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
                &.router-link-active {
                    border-bottom: 2px solid #3D5AFE;
                }
            }
        }
    }
</style>
