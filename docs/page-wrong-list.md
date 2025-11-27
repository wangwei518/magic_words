# 错词本需求文档

## 页面路径
`/pages/wrong-list/index`

---

# 1. 页面结构

### 1. 头部
- 左侧：标题「错词本」
- 右侧：按钮「错词重做」

### 2. 列表展示
- 从旧到新顺序排列
- 卡片内容包含：
  - 单词
  - 英/美音标及发音按钮
  - 中文释义
- 极简风样式

---

# 2. 左滑删除
- 左滑单条 → 露出红色“删除”按钮
- 点击删除后，从错词本移除
- 不支持批量删除

---

# 3. 错词重做功能
- 点击按钮 → 跳转到：`/pages/learn/index`
- 错词列表按加入时间排序，从旧到新
- 错词重做是否在答对后自动清除，取决于设置页开关 ，字段：`autoClearWrongAfterRedo`（默认关）

---

# 4. 数据
- 每条错词至少应包含：
id
word
phonetic_en
phonetic_us
meaning_cn
audio_en_url
audio_us_url
wrong_date
