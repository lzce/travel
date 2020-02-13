<template>
  <div class="citylist"  ref="scrollList">
    <div>
      <!-- 当前城市 -->
      <div class="current-city">
        <div class="cur-title">当前城市</div>
        <div class="cur-item">上海</div>
      </div>
      <!-- 热门城市 -->
      <div class="hot-city">
        <div class="cur-title">热门城市</div>
        <ul class="hot-item">
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">上海</a></li>
        </ul>
      </div>
      <!-- 城市列表 -->
      <div class="cate-city">
        <div class="cate-item">
          <div class="cur-title">A</div>
          <ul class="item-ul">
            <li>阿拉尔</li>
            <li>阿拉尔</li>
            <li>阿拉尔</li>
            <li>阿拉尔</li>
          </ul>
        </div>

        <div class="cate-item">
          <div class="cur-title">A</div>
          <ul class="item-ul">
            <li>阿拉尔</li>
            <li>阿拉尔</li>
            <li>阿拉尔</li>
            <li>阿拉尔</li>
          </ul>
        </div>

        <div class="cate-item">
          <div class="cur-title">A</div>
          <ul class="item-ul">
            <li>阿拉尔</li>
            <li>阿拉尔</li>
            <li>阿拉尔</li>
            <li>阿拉尔</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.scrollList)
  }
}
</script>

<style lang="scss" scoped>
.citylist {
  position: absolute;
  left: 0;
  top: 1.7rem;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .cur-title {
    background: #eee;
    color: #444;
    font-size: .28rem;
    height: .5rem;
    line-height: .5rem;
    text-indent: 1em;
  }
  .current-city {
    .cur-item {
      width: 2rem;
      text-align: center;
      line-height: .4rem;
      height: .4rem;
      border: 1px solid #ccc;
      border-radius: .05rem;
      margin: .2rem .2rem;
    }
  }
  .hot-city {
    .hot-item {
      display: flex;
      flex-wrap: wrap;
      padding-left: .2rem;
      padding-top: .3rem;
      li {
        margin-right: .3rem;
        margin-bottom: .3rem;
        a {
          width: 2rem;
          text-align: center;
          line-height: .4rem;
          height: .4rem;
          border: 1px solid #ccc;
          border-radius: .05rem;
          display: block;
          color: #222;
        }
      }
    }
  }

  .cate-city {
    .cate-item {
      .item-ul {
        li {
          height: .8rem;
          line-height: .8rem;
          border-bottom: 1px solid #ccc;
          text-indent: 1em;
        }
      }
    }
  }
}
</style>
