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

  test
  </div>
</template>

<script>
import HeaderComponent from '../../components/Header'
export default {
  name: 'home',
  components: {
    HeaderComponent
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  methods: {
    someSwiperEvent () {
      console.log('哈哈')
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
</style>
