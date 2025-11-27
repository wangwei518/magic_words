Page({
  data: {
    wrongList: [],
    startX: 0
  },

  onShow() {
    this.loadWrongList();
  },

  loadWrongList() {
    const list = [
      {
        id: "1",
        word: "already",
        phonetic_en: "[ˈɔːlredi]",
        phonetic_us: "[ɔːlˈredi]",
        meaning_cn: "已经",
        date: "2025-11-20",
        isTouchMove: false
      },
      {
        id: "2",
        word: "touch",
        phonetic_en: "[tʌtʃ]",
        phonetic_us: "[tʌtʃ]",
        meaning_cn: "触摸，接触",
        date: "2025-11-21",
        isTouchMove: false
      }
    ];
    this.setData({ wrongList: list });
  },

  /* ======== 左滑删除逻辑（简化版） ======== */

  // 记录起始 X，并重置所有项 isTouchMove
  onTouchStart(e) {
    const startX = e.changedTouches[0].clientX;
    const list = this.data.wrongList.map(item => {
      item.isTouchMove = false;
      return item;
    });
    this.setData({
      startX,
      wrongList: list
    });
  },

  // 按水平位移判断是否左滑
  onTouchMove(e) {
    const index = e.currentTarget.dataset.index;
    const moveX = e.changedTouches[0].clientX;
    const disX = this.data.startX - moveX; // >0 表示向左

    const list = this.data.wrongList.map((item, i) => {
      // 其他项一律收回
      item.isTouchMove = false;
      if (i === index) {
        // 左滑距离超过 40 像素才算真正左滑
        item.isTouchMove = disX > 40;
      }
      return item;
    });

    this.setData({ wrongList: list });
  },

  // 删除
  onDeleteWord(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: "删除错词",
      content: "确认从错词本中删除这个单词吗？",
      success: (res) => {
        if (res.confirm) {
          const list = this.data.wrongList.filter(item => item.id !== id);
          this.setData({ wrongList: list });
          // TODO: 同步删除到存储
        }
      }
    });
  },

  /* ========= 其余函数保持不变 ========= */

  onPlayAudio(e) {
    // 暂留，后面接语音
  },

  onRedoWrongWords() {
    if (this.data.wrongList.length === 0) {
      wx.showToast({
        title: "没有错词可重做",
        icon: "none"
      });
      return;
    }
    wx.navigateTo({
      url: "/pages/learn/index?mode=wrong"
    });
  }
});
