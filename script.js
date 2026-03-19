// script.js
const foods = [
  { name: "麻辣烫", emoji: "🌶️🔥", comment: "今天就该对自己狠一点！" },
  { name: "寿司/刺身", emoji: "🍣", comment: "来点高级的，奖励自己～" },
  { name: "肠粉 + 艇仔粥", emoji: "🥟", comment: "早茶魂在召唤你…" },
  { name: "牛肉面 / 拉面", emoji: "🍜", comment: "一碗热汤面，治愈一切不开心" },
  { name: "烤肉/韩式烤肉", emoji: "🥩🔥", comment: "今天适合放纵一下！" },
  { name: "沙县小吃全家桶", emoji: "🍗🍲", comment: "穷开心了解一下？" },
  { name: "泰式冬阴功 / 绿咖喱", emoji: "🦐🌿", comment: "酸辣开胃，假期模式启动" },
  { name: "螺蛳粉", emoji: "😷🍲", comment: "爱的人狂爱，恨的人想报警" },
  { name: "披萨 / 意面", emoji: "🍕", comment: "今天不想动筷子系列" },
  { name: "煎饼果子 + 豆腐脑", emoji: "🥞", comment: "北方灵魂的归宿" },
  { name: "日式豚骨拉面", emoji: "🍥", comment: "浓郁到想哭" },
  { name: "火锅（毛肚+鸭肠）", emoji: "🥘", comment: "人生苦短，必须火锅！" },
  { name: "臭豆腐 + 快乐水", emoji: "🧀🥤", comment: "越臭越上头" },
  { name: "自助烤鱼 / 酸菜鱼", emoji: "🐟", comment: "今天适合重口味" },
  { name: "什么都不吃", emoji: "😴", comment: "减肥第一步：先睡一觉再说" }
];

const resultEl = document.getElementById('result');
const foodEl = document.getElementById('food');
const emojiEl = document.getElementById('emoji');
const commentEl = document.getElementById('comment');
const btn = document.getElementById('decideBtn');
const countEl = document.getElementById('count');

let count = 0;

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;

  // 随机选一个
  const randomFood = foods[Math.floor(Math.random() * foods.length)];

  emojiEl.textContent = randomFood.emoji;
  foodEl.textContent = randomFood.name;
  commentEl.textContent = randomFood.comment;

  // 加一点动画
  resultEl.classList.remove('active');
  void resultEl.offsetWidth; // 强制重绘
  resultEl.classList.add('active');
});