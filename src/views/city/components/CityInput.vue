<template>
  <div class="cityInput">
    <input type="text" placeholder="输入城市名称或拼音">
  </div>
</template>

<script>
export default {
  name: 'CityInput'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varibles';
.cityInput {
  background: $bgColor;
  padding: .15rem .1rem;
  margin-top: -.02rem;
  input {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 12px;
    padding: .1rem;
    color: #666;
  }
}
</style>
