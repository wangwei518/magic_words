# 首页需求文档

## 页面路径
`/pages/index/index`

---

## 1. 页面功能

### 1. 今日任务模块
- 展示「今日任务：已完成 X / 目标 Y」
- 使用圆角进度条展示完成百分比
- 进度条中显示百分比文字，例如 `30%`

### 2. 当前词书模块
- 显示当前选择的词书名称
- 若未选择 → 显示「未选择」
- 点击「开始学习」时若未选择词书，需要弹窗提醒跳转设置页

### 3. 主按钮区
- **开始学习**
  - 跳转到 `/pages/learn/index?mode=today`
- **错词本**
  - 跳转到 `/pages/wrong-list/index`
- **设置**
  - 跳转到 `/pages/settings/index`

---

## 2. 状态数据
- `completedToday`
- `dailyTarget`
- `progressPercent`
- `currentBookName`
- `username`

---

## 3. 行为逻辑
1. 打开首页 → 从后端获取今日进度
2. 点击「开始学习」
   - 若无词书 → 提示跳转设置页
   - 若有 → 按 mode=today 进入学习页
3. 点击「错词本」→ 跳转错词本页
4. 点击「设置」→ 跳转设置页
