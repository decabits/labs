import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './components/Router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({

    vuetify,
    router,
    render: h => h(App)

}).$mount('#app')