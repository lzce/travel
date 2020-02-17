<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBarner'
import DetailHeader from './components/DetailHeader'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="scss" scoped>
.detail {
  height: 50rem;
}
</style>
