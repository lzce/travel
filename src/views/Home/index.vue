<template>
  <div class="home">
    <!-- 主页头部 -->
    <header-component></header-component>
    <!-- 轮播图部分 -->
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="someSwiperEvent">
      <!-- slides -->
      <swiper-slide>
        <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/6e5343d7-8871-47a4-b5ed-9f7852771565.jpg_r_390x260x90_ca4a4fff.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/aa5c22fb-028b-450f-ada0-652a0a9d30e2.jpg_r_390x260x90_c70c4c8c.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://imgs.qunarzz.com/vs_ceph_vs_tts/4bb8a0a2-22e0-45f4-bb75-7fd4c2cf9cc2.jpg_r_390x260x90_755ac99a.jpg" alt="">
      </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>

    <!-- nav导航模块 -->
    <swiper class="index-nav">
      <swiper-slide v-for="(page, index) in navPage" :key="index">
        <div v-if="page === 1" class="swiper-slide-other">
          <div class="nav-item" v-for="item in navOne" :key="item.id">
            <a href="#">
              <img class="nav-img" :src="item.navUrl" alt="">
            </a>
            <span class="nav-name">{{ item.name }}</span>
          </div>
        </div>
        <div v-else>
          <div class="nav-item" v-for="item in navTwo" :key="item.id">
            <a href="#">
              <img class="nav-img" :src="item.navUrl" alt="">
            </a>
            <span class="nav-name">{{ item.name }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 热销推荐模块 -->
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header'
import HomeRecommend from './components/HomeRecommend.vue'
export default {
  name: 'home',
  components: {
    HeaderComponent,
    HomeRecommend
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
      navList: [
        {
          id: 1,
          navUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          name: '酒店'
        },
        {
          id: 2,
          navUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          name: '机票'
        },
        {
          id: 3,
          navUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
          name: '火车票'
        },
        {
          id: 4,
          navUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          name: '度假'
        },
        {
          id: 5,
          navUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          name: '景点门票'
        },
        {
          id: 6,
          navUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          name: '海外酒店'
        },
        {
          id: 7,
          navUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          name: '低价机票'
        },
        {
          id: 8,
          navUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          name: '汽车船票'
        },
        {
          id: 9,
          navUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          name: '自由行'
        },
        {
          id: 10,
          navUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          name: '攻略'
        },
        {
          id: 10,
          navUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          name: '攻略'
        }
      ]
    }
  },
  methods: {
    someSwiperEvent () {
      console.log('哈哈')
    }
  },
  computed: {
    // 判断 nav 的个数
    navPage () {
      const pages = Math.ceil(this.navList.length / 10)
      return pages
    },
    navOne () {
      return this.navList.slice(0, 10)
    },
    navTwo () {
      return this.navList.slice(10, 20)
    }
  }

}
</script>

<style lang="scss" scoped>
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
</style>
