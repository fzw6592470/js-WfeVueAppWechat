<template>
  <li :class="className" :data-url="url">
    <span :class="icon"></span>
    <p>{{title}}</p>
  </li>
</template>

<script>

export default {
  name: 'MenuItem',
  props: {
    className: {
      type: String,
      default: 'col-xs-4 col-lg-4 col-sm-4'
    },
    icon: {
      type: String,
      default: 'common-menu-icon'
    },
    title: {
      type: String,
      default: 'aaa'
    },
    url: {
      type: String,
      default: ''
    }
  },
  clickHandler: function (e) {
    let item = e.currentTarget
    let className = item.className

    if (className.indexOf('active') === -1) {
      let random = Math.ceil(Math.random() * 1000000000)
      let url = item.getAttribute('data-url')
      window.location.href = url.indexOf('?') !== -1 ? (url + '&' + random) : (url + '?' + random)
    } else {
      return false
    }
  }

}

</script>
