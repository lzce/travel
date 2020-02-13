<template>
  <div class="city">
    <!-- 头部 -->
    <city-header></city-header>
    <!-- 输入框 -->
    <city-input></city-input>
    <!-- 城市列表 -->
    <city-list></city-list>
    <!-- 右侧字母表 -->
    <city-letter></city-letter>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CityInput from './components/CityInput'
import CityList from './components/CityList'
import CityLetter from './components/CityLetter'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityInput,
    CityList,
    CityLetter
  }
}
</script>

<style lang="scss" scoped>
</style>
