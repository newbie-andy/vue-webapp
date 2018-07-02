<template>
    <transition name="show-person">
        <div class="user-info" v-show="componentConfig.isShow">
            <backNavigator></backNavigator>
            <section class="user-message-box">
                <div class="user-avatar">
                    <img :src="personInfo.avatar"/>
                </div>
                <ul class="user-message">
                    <li v-for="(person, index) in doneTodosCount" :key="index" class="user-message-list">
                        <i :class="['iconfont', 'icon', persoIcons[index]]"></i>
                        <span v-if="'sex' == index">{{ ('male' === person) ? '男' : '女' }}</span>
                        <span v-else-if="'address' == index">{{ person.zh.state + person.zh.province + person.zh.city }}</span>
                        <span v-else>{{ person }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex'
import backNavigator from '../navigator/backNavigator'
export default {
    name: 'personDetail',
    props: ['componentConfig'],
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
    computed: {
        ...mapState({
            personInfo: 'person',
            persoIcons: 'icons'
        }),
        doneTodosCount: function() {
            //处理显示的数据，因为头像不需要图标，所以我们这里进行了过滤的处理
            let person = this.personInfo;
            let hasAvatar = person.hasOwnProperty('avatar');
            if(hasAvatar) {
                delete person.avatar
            }
            return person;
        }
    },
    components: {
        backNavigator
    }
}
</script>

<style lang="scss" scoped>
    .user-info {
        position: absolute;
        top: 0%;
        right: 0%;
        opacity: 1;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        z-index: 2000;
        background: linear-gradient(60deg, #e4ab5c, #ee6c6c);
        .user-message-box {
            position: relative;
            height: 70%;
            margin-top: 30vh;
            background: rgba(255, 255, 255, 0.6);
            border-radius: px2rem(15px) px2rem(15px) 0 0;
            .user-avatar {
                position: absolute;
                top: px2rem(-80px);
                left: 50%;
                transform: translateX(-50%);
                width: px2rem(110px);
                height: px2rem(110px);
                border-radius: 50%;
                box-shadow: rgba(238, 108, 108, 0.1) 0px 0px 10px 3px, rgba(228, 171, 92, 0.5) 3px 3px 30px 5px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .user-message {
                padding-top: px2rem(60px);
                li.user-message-list {
                    i.icon {
                        font-size: px2rem(22px);
                        color: #ee6c6c;
                    }
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    box-sizing: border-box;
                    padding: px2rem(8px) 0;
                    padding-left: px2rem(30px);
                    letter-spacing: px2rem(1px);
                    font-size: px2rem(18px);
                    color: rgba(0,0,0,0.8);
                }
            }
        }
    }
    .show-person-enter {
        right: -100vw;
        opacity: 0;
    }

    .show-person-enter-active,.show-person-leave-active {
        transition: all .3s ease;
    }

    .show-person-leave-to {
        right: -100vw;
        opacity: 0;
    }
</style>


