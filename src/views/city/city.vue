<template>
  <div class="city">
    <!-- 头部 -->
    <city-header></city-header>
    <!-- 输入框 -->
    <city-input></city-input>
    <!-- 城市列表 -->
    <city-list :hotCity="hotCities" :city="cities"></city-list>
    <!-- 右侧字母表 -->
    <city-letter :city="cities"></city-letter>
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
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  created () {
    this.getHotcity()
    this.getCity()
  },
  methods: {
    async getHotcity () {
      const res = await this.$axios.get('/api/hotCities')
      // console.log(res)
      this.hotCities = res.data.hotCities
    },
    async getCity () {
      const res = await this.$axios.get('http://localhost:4000/cities')
      console.log(res)
      this.cities = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
