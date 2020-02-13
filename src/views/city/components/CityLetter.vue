<template>
  <div class="letter">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
export default {
  name: 'CityLetter'
}
</script>

<style lang="scss" scoped>
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
    margin: .1rem 0;
  }
}
</style>
