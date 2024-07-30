App({
  globalData: {
    userInfo: null
  },

  onLaunch: function () {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo;
    }
  },

  checkLogin: function() {
    return this.globalData.userInfo !== null;
  }
});
