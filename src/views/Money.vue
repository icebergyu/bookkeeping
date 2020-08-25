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
          <input type="text" placeholder="输入备注" />
        </label>
      </div>
      <div>
        <ul class="types">
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
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
.tags {
  font-size: 14px;
  padding: 16px;
  > .current {
    display: flex;
    > li {
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      background-color: #d1c9ef;
      padding: 0 16px;
      margin-right: 12px;
    }
  }
  > .new {
    padding: 16px 0;
    button {
      background-color: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
.notes {
  font-size: 14px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 16px;
  .name {
    padding-right: 16px;
  }
  input {
    padding: 16px 0;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
.types {
  background-color: #d1c9ef;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
  }
}
</style>