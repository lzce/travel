<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-xiazai6"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-49"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right" @click="() => {this.$router.push('/city')}">
        <em>{{ city }}</em>
        <span class="iconfont icon-ico_arrows_unfold"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  computed: {
    city () {
      return this.$store.state.city
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/varibles.scss';
.header {
  height: .86rem;
  background-color: $bgColor;
  display: flex;
  color: #fff;
  .header-left {
    line-height: .86rem;
    width: .64rem;
    text-align: center;
    span {
      margin-left: .1rem;
    }
  }
  .header-right {
    // width: 1.24rem;
    line-height: .86rem;
    text-align: center;
    padding: 0 .1rem;
    color: #fff;
    span {
      font-size: .24rem;
      display: inline-block;
      transform: translateY(-.04rem);
    }
    em {
      margin-right: .06rem;
      font-size: .32rem;
    }
  }
  .header-input {
    flex: 1;
    height: .64rem;
    margin-top: .11rem;
    background-color: #fff;
    color: #CCc;
    line-height: .64rem;
    text-indent: .5em;
    border-radius: 3px;
    margin-left: .2rem;
    font-size: .28rem;
  }
}
</style>
