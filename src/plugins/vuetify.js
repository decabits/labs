import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});