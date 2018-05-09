<template>

<footer>
  <ul class="common-menu">
    <v-menuItem v-for="(item, index) in menus" :key='index' :className='item.className' :icon='item.icon' :title='item.title' :url='item.url'></v-menuItem>
  </ul>
</footer>

</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'Menu',
  components: {
    'v-menuItem': MenuItem
  },
  data () {
    return {
      'menus': [{
        'className': 'col-xs-4 col-lg-4 col-sm-4 active',
        'icon': 'common-menu-icon common-menu-home-icon',
        'title': '停车缴费',
        'url': 'http://www.baidu.com'
      }, {
        'className': 'col-xs-4 col-lg-4 col-sm-4',
        'icon': 'common-menu-icon common-menu-charge-icon',
        'title': '快速充值',
        'url': 'http://www.baidu.com'
      }, {
        'className': 'col-xs-4 col-lg-4 col-sm-4',
        'icon': 'common-menu-icon common-menu-user-icon',
        'title': '个人中心',
        'url': 'http://www.baidu.com'
      }]
    }
  }
}

</script>
