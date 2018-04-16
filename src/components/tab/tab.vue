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
        }
    }
</style>
