Page({
  data: {
    images: [
      '/images/轮播图1.jpg',
      '/images/轮播图2.jpg',
      '/images/轮播图3.jpg'
    ]
  },

  onLoad: function(options) {
    // 页面初始化
  },

  checkLogin: function(callback) {
    const app = getApp();
    if (!app.checkLogin()) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再进行操作',
        success (res) {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/profile/profile'
            });
          }
        }
      });
    } else {
      if (typeof callback === 'function') {
        callback();
      }
    }
  },

  onTabItemTap: function(item) {
    const tabBarRoutes = {
      'pages/home/home': '/pages/home/home',
      'pages/quiz/quiz': '/pages/quiz/quiz',
      'pages/videos/videos': '/pages/videos/videos',
      'pages/cases/cases': '/pages/cases/cases',
      'pages/profile/profile': '/pages/profile/profile'
    };
    
    const url = tabBarRoutes[item.pagePath];
    
    if (url === '/pages/quiz/quiz') {
      this.checkLogin(() => {
        wx.switchTab({
          url: url
        });
      });
    } else {
      wx.switchTab({
        url: url
      });
    }
  }
});
