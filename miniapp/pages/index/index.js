const SETTINGS_KEY = "word_app_settings";
const PROGRESS_KEY = "word_app_progress_today";

Page({
  data: {
    username: "",
    currentBookName: "",
    dailyTarget: 20,
    completedToday: 0,
    progressPercent: 0
  },

  onShow() {
    // 每次回到首页都刷新一下
    this.loadSettings();
    this.loadTodayProgress();
  },

  loadSettings() {
    try {
      const settings = wx.getStorageSync(SETTINGS_KEY) || {};
      this.setData({
        username: settings.username || "",
        currentBookName: settings.currentBookName || "",
        dailyTarget: settings.dailyTarget || 20
      });
    } catch (e) {
      console.warn("load settings error", e);
    }
  },

  // 这里先用假数据，后面接学习页真实完成数量
  loadTodayProgress() {
    try {
      const prog = wx.getStorageSync(PROGRESS_KEY) || {};
      const completedToday = prog.completedToday || 0;
      const dailyTarget = this.data.dailyTarget || 1;
      const percent = dailyTarget > 0
        ? Math.min(100, Math.round((completedToday / dailyTarget) * 100))
        : 0;

      this.setData({
        completedToday,
        progressPercent: percent
      });
    } catch (e) {
      console.warn("load progress error", e);
      this.setData({
        completedToday: 0,
        progressPercent: 0
      });
    }
  },

  // 开始学习
  onStartStudy() {
    if (!this.data.currentBookName) {
      wx.showModal({
        title: "提示",
        content: "还没有选择词书，请先到设置页选择词书。",
        confirmText: "去设置",
        success: (res) => {
          if (res.confirm) {
            this.onGoSettings();
          }
        }
      });
      return;
    }

    wx.navigateTo({
      url: "/pages/learn/index?mode=today"
    });
  },

  // 跳转错词本
  onGoWrongList() {
    wx.navigateTo({
      url: "/pages/wrong-list/index"
    });
  },

  // 跳转设置页
  onGoSettings() {
    wx.navigateTo({
      url: "/pages/settings/index"
    });
  }
});
