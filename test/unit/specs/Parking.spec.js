import Vue from 'vue'
import Parking from '@/components/Parking'

describe('a.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Parking)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello').textContent)
      .toEqual('我就是不想说')
  })
})
