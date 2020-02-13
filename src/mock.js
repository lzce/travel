// 引入mockjs
const Mock = require('mockjs')
// 主页轮播图
Mock.mock('/api/swiperList', 'post', (req, res) => {
  return {
    swiperList: [
      {
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      },
      {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      }]
  }
})

// 主页 nav 数据
Mock.mock('/api/navList', () => {
  return {
    navList: [
      {
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        'desc': '景点门票'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        'desc': '滑雪季'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        'desc': '泡温泉'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        'desc': '动植园'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
        'desc': '游乐园'
      }, {
        'id': '0006',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
        'desc': '必游榜单'
      }, {
        'id': '0007',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
        'desc': '演出'
      }, {
        'id': '0008',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
        'desc': '城市观光'
      }, {
        'id': '0009',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        'desc': '一日游'
      }, {
        'id': '0010',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
        'desc': '演出'
      }, {
        'id': '0011',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
        'desc': '城市观光'
      }, {
        'id': '0012',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
        'desc': '一日游'
      }
    ]
  }
})

// 城市列表页热门城市数据
Mock.mock('/api/hotCities', 'get', () => {
  return {
    'hotCities': [{
      'id': 1,
      'spell': 'beijing',
      'name': '北京'
    }, {
      'id': 3,
      'spell': 'shanghai',
      'name': '上海'
    }, {
      'id': 47,
      'spell': 'xian',
      'name': '西安'
    }, {
      'id': 239,
      'spell': 'sanya',
      'name': '三亚'
    }, {
      'id': 188,
      'spell': 'lijiang',
      'name': '丽江'
    }, {
      'id': 125,
      'spell': 'guilin',
      'name': '桂林'
    }]
  }
})

// 城市列表数据
