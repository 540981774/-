Page({
  data: {
    totalScore: 0,
    wrongList: [],
    chooseValue: [],
    remark: ["好极了！你很棒棒哦", "哎哟不错哦", "别灰心，继续努力哦！"]
  },

  onLoad: function() {
    const app = getApp();
    const totalScore = app.globalData.score;
    const wrongList = app.globalData.wrongList;
    const chooseValue = app.globalData.chooseValue;

    this.setData({
      totalScore: totalScore,
      wrongList: wrongList,
      chooseValue: chooseValue
    });
  },

  toView: function() {
    // 查看错题的逻辑
  },

  toIndex: function() {
    const app = getApp();
    // 重置全局数据
    app.globalData.score = 0;
    app.globalData.wrongList = [];
    app.globalData.chooseValue = [];

    wx.reLaunch({
      url: '/pages/quiz/quiz'
    });
  }
});
