<template>
  <div>
    <Layout class-prefix="layout">
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button style="grid-area: num-1">1</button>
          <button style="grid-area: num-2">2</button>
          <button style="grid-area: num-3">3</button>
          <button style="grid-area: num-4">4</button>
          <button style="grid-area: num-5">5</button>
          <button style="grid-area: num-6">6</button>
          <button style="grid-area: num-7">7</button>
          <button style="grid-area: num-8">8</button>
          <button style="grid-area: num-9">9</button>
          <button style="grid-area: num-0">0</button>
          <button style="grid-area: add">+</button>
          <button style="grid-area: subtract">-</button>
          <button style="grid-area: multipy">×</button>
          <button style="grid-area: divide">÷</button>
          <button style="grid-area: dot">.</button>
          <button style="grid-area: percent">%</button>
          <button style="grid-area: delete">删除</button>
          <button style="grid-area: clear">清空</button>
          <button style="grid-area: ok">OK</button>
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
      <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.layout-content {
  border: 3px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      background-color: #d1c9ef;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }
  > .new {
    padding-top: 10px;
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
    display: grid;
    grid-template-areas:
      "num-7 num-8 num-9 add delete"
      "num-4 num-5 num-6 subtract clear"
      "num-1 num-2 num-3 multipy ok"
      "num-0 dot percent divide ok";
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 50px);
    background: linear-gradient(
      135deg,
      rgba(230, 230, 230, 1) 0%,
      rgba(246, 246, 246, 1) 100%
    );
    button {
      margin: 0;
      padding: 0;
      border: 0;
      display: block;
      outline: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: normal;
      color: #999;
      background: linear-gradient(
        135deg,
        rgba(230, 230, 230, 1) 0%,
        rgba(246, 246, 246, 1) 100%
      );
      box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1),
        4px 4px 10px -8px rgba(0, 0, 0, 0.3);
    }
    button:active {
      box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset,
        4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
    }
  }
}
</style>