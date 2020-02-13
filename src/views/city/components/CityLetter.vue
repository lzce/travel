<template>
  <div class="letter">
    <div class="item" v-for="(item, key) of city" :key="key">{{ key }}</div>
  </div>
</template>

<script>
export default {
  name: 'CityLetter',
  props: {
    city: Object
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varibles';
.letter {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
  .item {
    margin: .07rem 0;
    color: $bgColor;
  }
}
</style>
