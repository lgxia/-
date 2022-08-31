import Vue from 'vue'
import App from './App'

// 导入网络请求包
import { $http } from '@escook/request-miniprogram'

uni.$http=$http

//请求的根路径
$http.baseUrl= 'https://api-ugo-web.itheima.net'

//请求拦截
$http.beforeRequest =function(options){
	uni.showLoading({
		title:'数据加载中...'
	})
}

// 请求完成之后做一些事情、响应拦截器
$http.afterRequest = function () {
  uni.hideLoading()
}
 
// #ifndef VUE3
 
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif