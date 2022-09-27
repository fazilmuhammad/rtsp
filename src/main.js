import Vue from "vue";
import video from "video.js";
import "videojs-flash"; // 引入videojs flash
import App from "./App.vue";
Vue.prototype.$video = video; // 将video.js 实例放在Vue原型上
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
