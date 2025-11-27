# 背单词微信小程序 PRD（总览）

## 1. 产品定位
- 极简、无社交、仅做“背单词”这一件事。
- 用户群体：初一～初三学生。
- 支持每日学习任务 + 遗忘曲线自动复习。
- 支持错词本与错词重做。
- 单词发音支持英音/美音，自动播放可配置。
- 词书采用 GitHub 托管，支持 7/8/9 年级教材词表，可社区补充。

---

## 2. 核心功能模块

### 2.1 首页
- 今日任务进度展示（完成数量/目标数）。
- 当前词书展示。
- 入口按钮：开始学习、错词本、设置。

---

### 2.2 学习页（连线模式）
- 支持两种上下文：
  - 今日学习（今日任务）
  - 错词重做（从错词本按旧→新）
- 采用 4×4「英文—中文」连线。
- 可先点左右任意一侧。
- 正确连线 → 绿色；错误连线 → 红色并加入错词本（today 模式）。
- 「瞄一眼」展示本页正确连线，但不改变用户状态、不自动翻页。
- 顶部进度条显示完成百分比。
- 每页 4 词，4 词都正确后 1 秒自动翻页。
- 最后一页完成后跳转完成页。

---

### 2.3 错词本页
- 列表展示从旧到新排序的错词。
- 支持左滑删除单条错词。
- 无批量删除。
- 顶部按钮「错词重做」→ 跳到学习页（mode=wrong）。
- 错词重做是否自动清除正确的错词由设置开关控制。

---

### 2.4 设置页
- 用户名
- 当前词书选择
- 每日单词数：5～50
- 发音类型：英音 / 美音
- 自动播放发音：开/关
- 错词重做后正确是否自动移出错词本：开/关（默认关）

---

### 2.5 完成页
- 显示插画 + 主标题「今日任务完成」或「错词重做完成」
- 随机显示 100 条鼓励语中的一条
- 两个按钮：重新学习、返回首页

---

## 3. 数据模型（概要）

### 3.1 用户 user
- username
- daily_target（5～50）
- auto_play_audio（bool）
- accent（en/us）
- current_book_id
- streak_days
- last_learn_date
- autoClearWrongAfterRedo（bool）

### 3.2 单词表 word
- id
- book_id
- word
- phonetic_en
- phonetic_us
- meaning_cn
- audio_en_url
- audio_us_url
- unit（课本单元）

### 3.3 用户学习记录 user_word_progress
- word_id
- memory_stage
- last_study_time
- next_review_date
- wrong_times
- wrong_date（首次错词时间）

---

## 4. 页面文档
各页面详细需求见：
- [page-home.md](./page-home.md)
- [page-learn.md](./page-learn.md)
- [page-wrong-list.md](./page-wrong-list.md)
- [page-settings.md](./page-settings.md)
- [page-finish.md](./page-finish.md)
