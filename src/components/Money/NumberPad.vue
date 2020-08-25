<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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