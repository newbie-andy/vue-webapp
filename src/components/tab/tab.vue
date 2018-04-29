<template>
    <div id="tabs">
        <router-link to="/channel" class="tab-footer">
            <i class="iconfont icon-homepage"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/find" class="tab-footer" replace>
            <i class="iconfont icon-search"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/examples" class="tab-footer center" replace>
            <div>
                <i class="iconfont icon-integral"></i>
            </div>
            <i>&nbsp;</i>
            <span>示例</span>
        </router-link>
        <router-link to="/message" class="tab-footer" replace>
            <i class="iconfont icon-message"></i>
            <span>消息</span>
        </router-link>
        <router-link to="/mine" class="tab-footer" replace>
            <i class="iconfont icon-mine"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            
        }
        
    }
</script>

<style lang="scss" scoped>
    #tabs {
        .tab-footer {
            display: flex;
            flex-direction: column;
            flex: 1;
            text-decoration: none;
            justify-content: center;
            align-items: center;
            color: #424242;
            &.router-link-active {
                color: #3D5AFE;
            }
            & i {
                font-size: px2rem(26px);
            }
            &.center {
                position: relative;
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: -53%;
                    width: px2rem(56px);
                    height: px2rem(56px);
                    border-radius: 50%;
                    background: #ffffff;
                    box-shadow: 0 -1px 2px #cccccc;
                    i {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 86%; 
                        height: 86%;
                        color: #fff;
                        text-align: center;
                        border-radius: 50%;
                        // background: #3D5AFE;
                        background: -webkit-linear-gradient(-100deg, #fe7b7b, #fed190);
                        background: linear-gradient(-100deg, #fe7b7b, #fed190);
                    }
                }
            }
        }
    }
</style>
