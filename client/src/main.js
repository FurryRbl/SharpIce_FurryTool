import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Home from './Home.vue'

Vue.use(ElementUI);

new Vue({
    el: '#home',
    render: h => h(Home)
});