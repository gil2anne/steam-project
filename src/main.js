// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import StarRating from 'vue-star-rating'
import { Carousel, Slide } from 'vue-carousel'
import * as axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.component('star-rating', StarRating);
Vue.component('carousel', Carousel);
Vue.component('slide', Slide);
Vue.use(VueLazyload, {
  lazyComponent: true
});
var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus;
        }
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})