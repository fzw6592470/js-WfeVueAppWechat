<template>

  <Menu ></Menu>

</template>

<script>
import Menu from './Menu'

export default {
  name: 'Parking',
  components: { Menu },
  data () {
    return {
      msg: '我就是不想说..'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
