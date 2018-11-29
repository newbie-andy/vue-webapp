import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        person: {
            name: '张烁',
            nickName: 'Zsing',
            avatar: 'http://img.zcool.cn/community/018883596491eca8012193a322385c.png@2o.png',
            age: 24,
            sex: 'male',
            job: 'newbie on the web',
            address: {
               zh:{
                    state: '中国',
                    province: '安徽省',
                    city: '界首市',
               },
               en: {
                    state: 'China',
                    province: 'Anhui',
                    city: 'Jieshou',
               }
            }
        },
        icons: {
            name: 'icon-mine',
            nickName: 'icon-label',
            age: 'icon-integral',
            sex: 'icon-like',
            job: 'icon-stealth',
            address: 'icon-coordinates'
        }
    }
})

export default store