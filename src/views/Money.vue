<template>
  <div>
    <Layout>
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" />
        </label>
      </div>
      <div>
        <ul class="tags">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button style="grid-area: add" @click="append('+')">+</button>
          <button style="grid-area: subtract" @click="append('-')">-</button>
          <button style="grid-area: multipy" @click="append('×')">×</button>
          <button style="grid-area: divide" @click="append('÷')">÷</button>
          <button>.</button>
          <button>%</button>
          <button>删除</button>
          <button>清空</button>
          <button>OK</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {};
</script>
