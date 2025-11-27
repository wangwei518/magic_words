const STORAGE_KEY = "word_app_settings";

Page({
  data: {
    username: "",
    currentBookName: "",
    dailyMin: 5,
    dailyMax: 50,
    dailyTarget: 10,
    accent: "en", // en / us
    autoPlay: false,
    autoClearWrongAfterRedo: false,
  },

  onLoad() {
    this.loadSettings();
  },

  // 从本地加载配置
  loadSettings() {
    try {
      const settings = wx.getStorageSync(STORAGE_KEY);
      if (settings) {
        this.setData({
          ...this.data,
          ...settings,
        });
      }
    } catch (e) {
      console.warn("load settings error", e);
    }
  },

  // 通用保存
  saveSettings(partial) {
    const newData = { ...this.data, ...partial };
    this.setData(partial);
    const {
      username,
      currentBookName,
      dailyTarget,
      accent,
      autoPlay,
      autoClearWrongAfterRedo,
    } = newData;
    wx.setStorageSync(STORAGE_KEY, {
      username,
      currentBookName,
      dailyTarget,
      accent,
      autoPlay,
      autoClearWrongAfterRedo,
    });
  },

  // 词书选择（暂时占位，将来跳转到词书页）
  onChooseBook() {
    wx.showToast({
      title: "词书选择后面再做",
      icon: "none",
    });
    // 例如未来：
    // wx.navigateTo({ url: "/pages/book-select/index" });
  },

  // 每日单词数
  onDailyTargetChange(e) {
    this.saveSettings({ dailyTarget: e.detail.value });
  },

  // 口音切换
  onAccentChange(e) {
    const accent = e.currentTarget.dataset.accent || "en";
    this.saveSettings({ accent });
  },

  // 自动播放
  onAutoPlayChange(e) {
    this.saveSettings({ autoPlay: e.detail.value });
  },

  // 错词重做自动清除
  onAutoClearChange(e) {
    this.saveSettings({ autoClearWrongAfterRedo: e.detail.value });
  },
});
