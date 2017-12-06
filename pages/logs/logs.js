//logs.js
const util = require('../../utils/util.js')
const Chart = require("../../utils/wxcharts.js")
const { randomNum } = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var res = wx.getSystemInfoSync();
    console.log(res);
    const data1 = [];
    const data2 = [];
    for (let i=0;i<8;i++){
      data1.push(randomNum(60,100));
      data2.push(randomNum(60,100));
    }
    const chart1 = new Chart({
      canvasId : "chart1",
      type: 'column',

      categories: ['语文', '数学', '历史', '政治', '地理', '生物','化学','物理'],

      series: [{

        name: '张三',

        data: [90, 80, 66, 70, 74, 80,78,88]

      }, {

        name: '李四',

        data: [70, 96, 75, 60, 77, 58,69,92]

      },
      {name : '王五',data :data1},
      { name: '马六', data: data2}
      ],

      yAxis: {

        format: function (val) {

          return val + '分';

        }

      },

      width: res.windowWidth,

      height: 300

    });
    const chart2 = new Chart({

    canvasId: 'chart2',
    type: 'radar',

    categories: ['CSS', 'HTML', 'AJX', 'MONDB', 'JQUERY', 'REACT','NODE.JS','BOOTSTRAP'],
    series: [{
      name: '技能掌握情况',
      data: [80, 80, 70, 60, 60, 50,80,60]
    }],
    width: res.windowWidth,
    height: 380,
    extra: {
      radar: {
        max: 100
      }
    }
  })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})