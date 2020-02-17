<template>
  <div class="letter">
    <div
      :class="['item', index === idx ? 'active' : '']"
      v-for="(item, idx) of letters"
      :key="item"
      @click="clickLetter(item, idx)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchend"
      :ref="item"
    >{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'CityLetter',
  data () {
    return {
      touchFlag: false,
      index: '',
      letter: ''
    }
  },
  props: {
    city: Object
  },
  computed: {
    letters () {
      return Object.keys(this.city)
    }
  },
  methods: {
    clickLetter (letter, index) {
      // console.log(letter)
      this.$emit('change', letter)
      this.index = index
    },
    handleTouchStart () {
      this.touchFlag = true
    },
    handleTouchMove (e) {
      // A到顶部距离
      if (!this.touchFlag) return
      let startY = this.$refs['A'][0].offsetTop
      // A到顶部的距离 减去头部部分 85
      let touchY = e.touches[0].clientY - 85
      // 相减 除 元素的高度 得到索引
      let index = Math.floor((touchY - startY) / 20)
      if (index < 0) {
        index = 0
      } else if (index >= 21) {
        index = 21
      }
      this.index = index
      this.letter = index
    },
    handleTouchend () {
      this.touchFlag = false
      this.index = ''
    }
  },
  watch: {
    index () {
      this.$emit('change', this.letters[this.letter])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/varibles';
.letter {
  position: absolute;
  right: 0;
  top: 1.72rem;
  // top: 0;
  bottom: 0;
  width: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 100vh;
  text-align: center;
  .item {
    line-height: .4rem;
    width: 0.4rem;
    color: $bgColor;
  }

  .active {
    border-radius: 50%;
    background-color: $bgColor;
    color: #fff;
  }
}
</style>
