<template>
  <div class="gallary" v-show="this.showGallary" @click="hiddenGallary">
    <div class="wrap">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-banner">
        <swiper-slide v-for="(item, index) of imgList" :key="index">
          <img
            :src="item"
            alt
          />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgList: {
      type: Array,
      required: true
    },
    showGallary: {
      type: Boolean
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    hiddenGallary () {
      console.log('哈哈')
      this.$emit('hiddenGallary')
    }
  }
}
</script>

<style lang="scss" scoped>
.gallary {
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /deep/.swiper-slide img {
    width: 100%;
  }
}
</style>
