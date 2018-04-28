import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        person: {
            name: '张烁',
            nickName: 'Zsing',
            age: 25,
            sex: 'male',
            job: 'Web前端开发工程师',
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
            },
            avatar: 'http://img.zcool.cn/community/018883596491eca8012193a322385c.png@2o.png'
        }
    }
})

export default store