<template>
  <div class="wrapper">
    <div class="product-container">
      <div class="product"></div>
    </div>
    <div class="color-container">
      <div
        :class="[{ colorPick: color.pressed }, 'color-picker']"
        v-for="color in colorList"
        :key="color.id"
      >
        <button @click="colorClick(color)" :class="color.name"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Color } from "../models/Color";

export default class ShowProductColor extends Vue {
  colorList: Color[] = [
    new Color(1, "red", false),
    new Color(2, "yellow", false),
    new Color(3, "green", false),
    new Color(4, "blue", false),
  ];

  colorClick(c: Color) {
    c.pressed = true;
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  height: 800px;
  border: 2px solid black;
  .product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 50%;
    border: 2px solid black;
    .product {
      border: 2px solid black;
      width: 40%;
      height: 80%;
    }
  }
  .color-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: 70px;
    width: 60%;
    height: 30%;
    border: 2px solid grey;
    .colorPick {
      border-radius: 50%;
      border: 2px solid blue;
    }
    .color-picker {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 55px;
      height: 55px;
    }
    .red {
      width: 50px;
      height: 50px;
      background-color: red;
      border-radius: 50%;
      border: none;
      cursor: pointer;
    }
    .yellow {
      width: 50px;
      height: 50px;
      background-color: yellow;
      border-radius: 50%;
      border: none;
      cursor: pointer;
    }
    .green {
      width: 50px;
      height: 50px;
      background-color: green;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
    .blue {
      width: 50px;
      height: 50px;
      background-color: blue;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
