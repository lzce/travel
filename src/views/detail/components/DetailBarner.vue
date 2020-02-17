<template>
  <div class="detail-banner">
    <div class="wrap" @click="handleShowGallary">
      <swiper ref="mySwiper" class="swiper-banner">
        <swiper-slide>
          <img
            src="https://imgs.qunarzz.com/vs_ceph_vs_tts/e9842e5d-c259-4711-8439-724d032e66ea.jpg_r_390x260x95_e305bb30.jpg"
            alt
          />
          <div class="slide-title">
            <p>大连圣亚海洋世界(AAAA景区)</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <fade>
      <gallary @hiddenGallary='hiddenGallary' :imgList="imgList" :showGallary="this.showGallary"></gallary>
    </fade>
  </div>
</template>

<script>
import Gallary from '../../../components/Gallary/index'
import Fade from '../../../components/Fade/index'
export default {
  name: 'DetailBarner',
  components: {
    Gallary,
    Fade
  },
  data () {
    return {
      imgList: [
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/e9842e5d-c259-4711-8439-724d032e66ea.jpg_r_390x260x95_e305bb30.jpg',
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/be6183c5-166e-4062-aa30-b0dc3fc4dbf8.jpg_r_390x260x95_2edd6045.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    hiddenGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-banner {
  .swiper-banner {
    .swiper-slide {
      height: 5rem;
      img {
        width: 100vw;
        height: 100%;
      }
      .slide-title {
        position: absolute;
        bottom: 0;
        left: 0;
        height: .7rem;
        width: 100%;
        background-image: linear-gradient(bottom, rgba(255, 255, 255, .8), rgba(255, 255, 255, .2));

        p {
          color: #333;
          font-size: .37rem;
          line-height: .7rem;
          text-indent: 1em;
        }
      }
    }
    /deep/.swiper-pagination-bullet-active {
      background: #FFF !important;
    }
  }
}
</style>
