Page({
  data: {
    currentVideo: {
      src: '/images/video1.mp4',
      title: '国家网络安全宣传周短片：《Trap》',
      description: '这是国家网络安全宣传周短片《Trap》的简介。'
    },
    videos: [
      {
        src: '/images/xxx',
        title: '国家网络安全宣传周短片：《Trap》',
        description: '这是国家网络安全宣传周短片《Trap》的简介。'
      },
      {
        src: '/images/xxx',
        title: '国家网络安全宣传周短片：《五个都是》',
        description: '这是国家网络安全宣传周短片《五个都是》的简介。'
      },
      {
        src: '/images/xxx',
        title: '防范电信诈骗：美丽的错误',
        description: '这是防范电信诈骗《美丽的错误》的简介。'
      }
    ]
  },

  playVideo: function(e) {
    const index = e.currentTarget.dataset.index;
    const selectedVideo = this.data.videos[index];
    this.setData({
      currentVideo: selectedVideo
    });
  }
});
