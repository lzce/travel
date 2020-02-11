<template>
  <div class="home-recommend">
    <div class="recom-title">周末游</div>
    <ul class="recommend">
      <li v-for="item in recommendList" :key="item.id" class="recom-item border-bottom">
        <div class="recom-left">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="recom-right">
          <p class="oneline">{{ item.name }}</p>
          <p class="oneline">{{ item.desc }}</p>
          <a href="#">查看详情</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl: '//img1.qunarzz.com/sight/p0/1504/54/54a3c7b12f5d08d4.water.jpg_256x160_2d17ee23.jpg',
          name: '潘安湖湿地公园',
          desc: '古木交柯、桂香四溢的潘安风貌'
        },
        {
          id: 2,
          imgUrl: '//img1.qunarzz.com/sight/p0/201403/10/6b13ab256821bf37ed93eb0352a9e207.jpg_256x160_e4b6fadd.jpg',
          name: '大丰上海知青纪念馆',
          desc: '具有深远文化意义的历史旧居'
        },
        {
          id: 3,
          imgUrl: '//img1.qunarzz.com/sight/p0/1409/17/353075e700c2881708dc70afd164dfdf.jpg_256x160_864c2dda.jpg',
          name: '山塘昆曲馆',
          desc: '品一杯香茗，看一道风景，听一曲雅乐'
        },
        {
          id: 4,
          imgUrl: '//img1.qunarzz.com/sight/p0/1903/48/4878591ed56efabfa3.img.jpg_256x160_b3838b2b.jpg',
          name: '金坛茅山',
          desc: '茅山素来有“第一福地，第八洞天”之美誉'
        }
      ]
    }
  },
  mounted () {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/mixins.scss';
.home-recommend {

  .recom-title {
    height: .7rem;
    line-height: .7rem;
    text-indent: 1em;
    font-size: .28rem;
    background-color: #eee;
    margin-bottom: .1rem;
  }
  .recommend {
    .recom-item {
      display: flex;
      flex-direction: column;
      padding: 0 .1rem;
      margin-bottom: .2rem;
      padding-bottom: .2rem;
      .recom-left {
        // margin-right: .2rem;
        img {
          width: 100%;
          height: 2rem;
        }
      }
      .recom-right {
        padding-top: .1rem;
        p:nth-child(1) {
          font-size: .32rem;
          width: 100%;
          min-width: 100%;
          min-width: 1rem;
        }
        p:nth-child(2) {
          font-size: .26rem;
          color: #666;
          margin: .2rem 0;
        }
        a {
          color: #FFF;
          background: #FF8C19;
          height: .4rem;
          // width: 1.3rem;
          display: inline-block;
          border-radius: .1rem;
          line-height: .4rem;
          padding: 0 .2rem;
        }
      }
    }
  }
}
</style>
