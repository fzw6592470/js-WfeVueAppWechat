import Vue from 'vue'
import Router from 'vue-router'

import Parking from '@/components/Parking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parking',
      component: Parking
    }
  ]
})
