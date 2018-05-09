import Vue from 'vue'
import Menu from '@/components/Menu'

describe('Menu.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Menu)
    const vm = new Constructor().$mount()
    
  })
})
