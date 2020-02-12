<template>
  <div class="cityHeader">
    <span class="iconfont icon-icon-test1" @click="goBack"></span>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/varibles.scss';
.cityHeader {
  height: $headerHeight;
  background-color: $bgColor;
  // display: flex;
  color: #fff;
  span:nth-child(1) {
    height: .86rem;
    width: .5rem;
    font-size: .7rem;
    position: absolute;
    line-height: .86rem;
    left: 0;
    top: 0;
  }
  .title {
    text-align: center;
    line-height: .86rem;
    font-size: 18px;
  }
}
</style>
