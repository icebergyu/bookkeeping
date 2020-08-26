<template>
  <div class="numberPad">
    <div class="output">{{equation}}</div>
    <div class="buttons">
      <button style="grid-area: num-1" @click="append(1)">1</button>
      <button style="grid-area: num-2" @click="append(2)">2</button>
      <button style="grid-area: num-3" @click="append(3)">3</button>
      <button style="grid-area: num-4" @click="append(4)">4</button>
      <button style="grid-area: num-5" @click="append(5)">5</button>
      <button style="grid-area: num-6" @click="append(6)">6</button>
      <button style="grid-area: num-7" @click="append(7)">7</button>
      <button style="grid-area: num-8" @click="append(8)">8</button>
      <button style="grid-area: num-9" @click="append(9)">9</button>
      <button style="grid-area: num-0" @click="append(0)">0</button>
      <button style="grid-area: add" @click="append('+')">+</button>
      <button style="grid-area: subtract" @click="append('-')">-</button>
      <button style="grid-area: multipy" @click="append('×')">×</button>
      <button style="grid-area: divide" @click="append('÷')">÷</button>
      <button style="grid-area: dot" @click="append('.')">.</button>
      <button style="grid-area: percent" @click="calculatePercentage">%</button>
      <button style="grid-area: delete" @click="deleteOne">删除</button>
      <button style="grid-area: clear" @click="clear">清空</button>
      <button style="grid-area: ok" @click="calculate">OK</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  equation = "0";
  isDecimalAdded = false;
  isOperatorAdded = false;
  isStarted = false;
  //判断是否为运算符
  isOperator(character: string) {
    return ["+", "-", "×", "÷"].indexOf(character) > -1;
  }
  //添加操作符
  append(character: string) {
    if (this.equation === "0" && !this.isOperator(character)) {
      if (character === ".") {
        this.equation += "" + character;
        this.isDecimalAdded = true;
      } else {
        this.equation = "" + character;
      }
      this.isStarted = true;
      return;
    }

    //number
    if (!this.isOperator(character)) {
      if (character === "." && this.isDecimalAdded) {
        return;
      }
      if (character === ".") {
        this.isDecimalAdded = true;
        this.isOperatorAdded = true;
      } else {
        this.isOperatorAdded = false;
      }
      this.equation += "" + character;
    }
    //operator
    if (this.isOperator(character) && !this.isOperatorAdded) {
      this.equation += "" + character;
      this.isDecimalAdded = false;
      this.isOperatorAdded = true;
    }
  }
  calculate() {
    const result = this.equation
      .replace(new RegExp("×", "g"), "*")
      .replace(new RegExp("÷", "g"), "/");
    this.equation = parseFloat(eval(result).toFixed(9)).toString();
    this.isDecimalAdded = false;
    this.isOperatorAdded = false;
    this.$emit("update:value", this.equation);
    this.$emit("submit", this.equation);
  }
  calculatePercentage() {
    if (this.isOperatorAdded || !this.isStarted) {
      return;
    }
    this.equation = this.equation + "* 0.01";
    this.calculate();
  }
  clear() {
    this.equation = "0";
    this.isDecimalAdded = false;
    this.isOperatorAdded = false;
    this.isStarted = false;
  }
  deleteOne() {
    this.equation = this.equation.slice(0, -1);
  }
}
</script>

<style lang="scss" scoped>
.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    min-height: 72px;
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