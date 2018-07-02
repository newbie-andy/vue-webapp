<template>
    <div id="mine">
        <section class="mine-box">
                <div class="header-img">
                    <img :src="personInfo.avatar ? personInfo.avatar : ''" alt="" class="user-box"/>
                    <i :class="personInfo.sex"></i>
                </div>
                <span class="name">{{ personInfo.nickName }}</span>
        </section>

        <ul class="list-box">
            <li v-for="(list, index) in lists" :key="index" @click="switchComponent(list.componentNeed)"> 
                <i :class="['iconfont', list.icon]"></i>
                <div>
                    <span>{{ list.strings }}</span>
                    <i class="iconfont icon-enter"></i>
                </div>
            </li>
        </ul>
        <!-- 通过store进行获取用户的信息 -->
        <component :is="currentComponentShow" :component-config="compConfig"></component>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import personDetail from '../base/detail/personDetail'
    export default {
        name: 'Mine',
        data() {
            return {
                lists: [
                    {
                        icon: 'icon-manage',
                        strings: '详细信息',
                        componentNeed: 'personDetail'
                    },
                    {
                        icon: 'icon-order',
                        strings: '个人简历'
                    },
                    {
                        icon: 'icon-prompt',
                        strings: '系统设置'
                    }
                ],
                currentComponentShow: '',
                compConfig: {
                    isShow: false
                }
            }
        },
        computed: {
            ...mapState({
                personInfo: 'person',
            })
        },
        methods: {
            switchComponent: function(which) {
                this.currentComponentShow = which;
                this.compConfig = {
                    isShow: true
                };
            }
        },
        components: {
            personDetail
        }
    }
</script>

<style lang="scss" scoped>
    #mine {
        .mine-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 40%;
            position: relative;
            background: -webkit-linear-gradient(136deg, #fe7b7b, #fed190);
            background: linear-gradient(136deg, #fe7b7b, #fed190);
            clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 50% 100%, 0% 80%, 0% 60%);
            .header-img {
                position: relative;
                .user-box {
                    width: px2rem(100px);
                    height: px2rem(100px);
                    border-radius: 50%;
                    overflow: hidden;
                }
                i {
                    position: absolute;
                    top: 20%;
                    left: 98%;
                    font-size: px2rem(18px);
                    color:cadetblue;
                }
            }
            .name {
                margin-top: px2rem(15px);
                font-size: px2rem(16px);
                color: rgba(0,0,0,0.7);
            }

        }
        .list-box {
            margin-top: px2rem(10px);
            width: 100%;
            li {
                display: flex;
                box-sizing: border-box;
                justify-content: space-between;
                align-items: center;
                height: px2rem(46px);
                width: 100%;
                padding: 0 px2rem(30px);
                margin-bottom: px2rem(5px);
                font-size: px2rem(13px);
                background: #ffffff;
                i {
                    font-size: px2rem(22px);
                }
                div {
                    height: inherit;
                    display: flex;
                    align-items: center;
                    color: rgba(0,0,0,0.7);
                    i {
                        margin-left: px2rem(15px);
                        font-size: px2rem(19px);
                    }
                }
            }
        }
    } 
</style>
