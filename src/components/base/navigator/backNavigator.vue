<template>
    <div class="navigator">
        <i class="iconfont icon-return" @click="$emit('close-detail')"></i>
    </div>
</template>

<script>
export default {
    name: 'backNavigator',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .navigator {
        width: 100%;
        height: px2rem(40px);
        .iconfont {
            margin: px2rem(20px);
            display: flex;
            width: px2rem(34px);
            height: px2rem(34px);
            justify-content: center;
            align-items: center;
            font-size: px2rem(20px);
            border-radius: 50%;
            color: rgba(255,255,255, 0.8
            );
            background: rgba(0,0,0,0.6);
        }
    }
</style>

