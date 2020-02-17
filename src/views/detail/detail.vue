<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBarner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票一馆',
              children: [
                { title: '成人票一馆分馆' }
              ]
            }
          ]
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生票一馆',
              children: [
                { title: '学生票一馆分馆' }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  height: 50rem;
}
</style>
