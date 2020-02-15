<template>
  <div class="city-search">
    <div class="cityInput">
      <input v-model="keyword" type="text" @input="handleInput" placeholder="输入城市名称或拼音">
    </div>
    <div class="search-content" v-show="keyword.length" ref="search">
      <ul>
        <li v-for="item of searchList" :key="item.id">{{ item.name }}</li>
      </ul>
      <div class="none" v-show="noneShow">暂相关城市</div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityInput',
  props: {
    city: Object
  },
  data () {
    return {
      keyword: '',
      searchList: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    noneShow () {
      return this.keyword.trim().length !== 0 && this.searchList.length === 0
    }
  },
  methods: {
    handleInput () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (!this.keyword) {
          this.searchList = []
          return
        }
        let newArr = []
        for (let key in this.city) {
          this.city[key].forEach(v => {
            if (v.spell.includes(this.keyword) || v.name.includes(this.keyword)) {
              newArr.push(v)
            }
          })
        }
        this.searchList = newArr
      }, 100)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../../assets/varibles';
.city-search {
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
      color: #333;
    }
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.7rem;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;

    ul {
      li {
        line-height: .8rem;
        text-indent: 1em;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .none {
    line-height: .8rem;
    font-size: .32rem;
    text-indent: .5em;
  }
}
</style>
