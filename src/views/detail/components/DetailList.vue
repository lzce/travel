<template>
  <div class="list">
    <div v-for="(item, index) of list" :key="index" class="list-item">
      <div class="item-title">
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.list {
  .list-item {
    .item-title {
      border-bottom: 1px solid #ccc;
      line-height: .4rem;
    }
    .item-children {
      padding-left: .3rem;
    }
  }
}

</style>
