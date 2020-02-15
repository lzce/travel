<template>
  <div class="home">
    <!-- 主页头部 -->
    <div ref="homeHeader" class="fixed">
      <home-header></home-header>
    </div>
    <!-- 轮播图部分 -->
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <!-- nav导航模块 -->
    <swiper class="index-nav">
      <swiper-slide v-for="(page, index) in navPage" :key="index">
        <div v-if="page === 1" class="swiper-slide-other">
          <div class="nav-item" v-for="item in navOne" :key="item.id">
            <a href="#">
              <img class="nav-img" :src="item.imgUrl" alt="">
            </a>
            <span class="nav-name">{{ item.desc }}</span>
          </div>
        </div>
        <div v-else class="nav-page2">
          <div class="nav-item" v-for="item in navTwo" :key="item.id">
            <a href="#">
              <img class="nav-img" :src="item.imgUrl" alt="">
            </a>
            <span class="nav-name">{{ item.desc }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 热销推荐模块 -->
    <home-recommend></home-recommend>

    <!-- 周末游组件 -->
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../../components/Header'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 1000
        }
      },
      swiperList: [],
      navList: []
    }
  },
  methods: {
    // 获取轮播图数据
    async getSwiperList () {
      const res = await this.$axios.post('/api/swiperList')
      this.swiperList = res.data.swiperList
    },
    // 获取 nav数据
    async getNavList () {
      const res = await this.$axios.get('/api/navList')
      this.navList = res.data.navList
    }
  },
  created () {
    // 获取轮播图数据
    this.getSwiperList()
    this.getNavList()
  },
  computed: {
    // 判断 nav 的个数
    navPage () {
      const pages = Math.ceil(this.navList.length / 10)
      return pages
    },
    // 第一页
    navOne () {
      return this.navList.slice(0, 10)
    },
    // 第二页
    navTwo () {
      return this.navList.slice(10, 20)
    }
  },
  activated () {
    console.log('哈哈')
  }

}
</script>

<style lang="scss" scoped>
.home {
  padding-top: .86rem;
}
.swiper-slide {
  img {
    width: 100vw;
    height: 170px;
  }
}

/deep/ .swiper-pagination-bullet-active {
  background: #FFF;
}

.index-nav {
  display: flex;
  flex-wrap: wrap !important;
  padding: .2rem;

  .swiper-slide-other {
    display: flex;
    flex-wrap: wrap;
  }

  .nav-page2 {
    display: flex;
    flex-wrap: wrap;
  }
  .nav-item {
    width: 20% !important;
    height: 1.46rem !important;
    display: flex;
    flex-direction: column;
    // display: block;
    justify-content: space-around;
    margin-bottom: .2rem;
    a {
      display: block;
    }
    .nav-img {
      width: 1rem;
      height: 1rem;
      display: block;
      margin: 0 auto;
    }
    .nav-name {
      font-size: .22rem;
      color: #666;
      margin-top: .2rem;
      // margin-left: .25rem;
      text-align: center;
    }
  }
}

.fixed {
  position: fixed;
  width: 100%;
  height: .86rem;
  z-index: 999;
  top: 0;
}
</style>
