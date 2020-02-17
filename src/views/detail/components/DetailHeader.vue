<template>
  <div class="detailHeader" >
    <div class="header-ads" v-show="this.showAbs" @click="() => this.$router.go(-1)">
      <span class="iconfont icon-xiazai6"></span>
    </div>
    <div class="header-fixed" v-show="!this.showAbs" ref="headerFix" :style="styles">
      <div class="left" @click="() => this.$router.go(-1)">
        <span class="iconfont icon-xiazai6"></span>
      </div>
      <div class="right">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      styles: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 监听页面滚动
    handleScroll () {
      const topY = document.documentElement.scrollTop
      // console.log(topY)
      if (topY > 60) {
        this.showAbs = false
        let opacity = topY / 140
        opacity = opacity > 1 ? 1 : opacity
        // console.log(this.styles.opacity)
        this.styles.opacity = opacity
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/varibles.scss';
.detailHeader {
  .header-ads {
    position: absolute;
    z-index: 2;
    left: .2rem;
    right: 0;
    top: .2rem;
    width: 0.8rem;
    height: 0.8rem;
    line-height: .8rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .6);
    text-align: center;
    span {
      color: #fff;
      font-size: .35rem;
    }
  }
  .header-fixed {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    height: $headerHeight;
    background-color: $bgColor;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0.86rem;
      line-height: .85rem;
      text-align: center;
      span {
        color: #fff;
        font-size: .4rem
      }
    }
    .right {
      line-height: $headerHeight;
      text-align: center;
      color: #fff;
      font-size: .36rem;
    }
  }
}
</style>
