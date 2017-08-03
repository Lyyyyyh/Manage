// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import homepage from '@/components/rightcontent/homepage/homepage.vue'
import schedual from '@/components/rightcontent/schedual/schedual.vue'
import book from '@/components/rightcontent/book/book.vue'
import see from '@/components/rightcontent/see/see.vue'
import department from '@/components/rightcontent/department/department.vue'
import info from '@/components/rightcontent/info/info.vue'
import permission from '@/components/rightcontent/systemset/permission.vue'
import log from '@/components/rightcontent/systemset/log.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false


const routes = [
	{path: '/homepage',component: homepage},
	{path: '/schedual',component: schedual},
	{path: '/book',component: book},
	{path: '/see',component: see},
	{path: '/department',component: department},
	{path: '/info',component: info},
	{path: '/permission',component: permission},
	{path: '/log',component:log},
	{path:'*',redirect:'/homepage'}
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
