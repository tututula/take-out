<template>
  <div id="app">
      <router-view></router-view>
      <footer-guide v-if="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body{
    background #F0F3F4
}

</style>
