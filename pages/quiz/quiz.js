Page({
  startQuiz: function() {
    wx.navigateTo({
      url: '/pages/quiz/quiz'
    });
  },
  data: {
    questionList: [
      {
        question: "以下哪一项是常见的网络攻击类型？",
        option: { A: "SQL 注入", B: "XML 提取", C: "HTML 注入", D: "CSS 攻击" },
        type: 1,
        scores: 10,
        answer: "A"
      },
      {
        question: "在网络安全中，防火墙的主要作用是什么？",
        option: { A: "监控网络流量", B: "增加网络速度", C: "提供网络存储", D: "加密网络数据" },
        type: 1,
        scores: 10,
        answer: "A"
      },
      {
        question: "什么是网络钓鱼攻击？",
        option: { A: "一种通过虚假网站获取个人信息的攻击", B: "一种病毒感染攻击", C: "一种物理攻击", D: "一种密码破解方法" },
        type: 1,
        scores: 10,
        answer: "A"
      },
      {
        question: "以下哪种方法可以有效地保护您的个人信息？",
        option: { A: "使用强密码并定期更换", B: "在公共网络中共享个人信息", C: "随意点击电子邮件中的链接", D: "将密码写在纸上放在桌子上" },
        type: 1,
        scores: 10,
        answer: "A"
      },
      {
        question: "什么是DDoS攻击？",
        option: { A: "分布式拒绝服务攻击", B: "数据丢失攻击", C: "密码破解攻击", D: "恶意软件攻击" },
        type: 1,
        scores: 10,
        answer: "A"
      }
    ],
    currentQuestionIndex: 0,
    score: 0,
    wrongList: [],
    chooseValue: []
  },

  onLoad: function() {
    this.setData({
      currentQuestion: this.data.questionList[this.data.currentQuestionIndex]
    });
  },

  radioChange: function(e) {
    const chosenOption = e.detail.value;
    const currentQuestion = this.data.questionList[this.data.currentQuestionIndex];
    let score = this.data.score;
    const chooseValue = this.data.chooseValue;

    chooseValue[this.data.currentQuestionIndex] = chosenOption;

    if (chosenOption === currentQuestion.answer) {
      score += currentQuestion.scores;
    } else {
      this.data.wrongList.push(this.data.currentQuestionIndex);
    }

    this.setData({
      score: score,
      chooseValue: chooseValue
    });
  },

  checkboxChange: function(e) {
    const chosenOptions = e.detail.value;
    const currentQuestion = this.data.questionList[this.data.currentQuestionIndex];
    let score = this.data.score;
    const chooseValue = this.data.chooseValue;

    chooseValue[this.data.currentQuestionIndex] = chosenOptions;

    if (chosenOptions.includes(currentQuestion.answer)) {
      score += currentQuestion.scores;
    } else {
      this.data.wrongList.push(this.data.currentQuestionIndex);
    }

    this.setData({
      score: score,
      chooseValue: chooseValue
    });
  },

  nextQuestion: function() {
    if (this.data.currentQuestionIndex < this.data.questionList.length - 1) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1,
        currentQuestion: this.data.questionList[this.data.currentQuestionIndex + 1]
      });
    }
  },

  nextSubmit: function() {
    getApp().globalData.score = this.data.score;
    getApp().globalData.wrongList = this.data.wrongList;
    getApp().globalData.chooseValue = this.data.chooseValue;
    wx.navigateTo({
      url: '/pages/result/result'
    });
  },

  outTest: function() {
    wx.switchTab({
      url: '/pages/home/home'
    });
  }
});
