<template>
  <div>
    <HeaderChild :randomText="ourText" />

    <button @click="handleClick" :pressedBtn="ourBtn">Ändra text</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderChild from "../components/HeaderChild.vue";
@Options({
  components: { HeaderChild },
})
export default class Header extends Vue {
  ourText = "Hej på dig: ";
  ourBtn = false;

  handleClick() {
    if (this.ourBtn === false) {
      this.ourText = "Hejdå på er";
      this.ourBtn = true;
    } else {
      this.ourText = "Hej på dig";
      this.ourBtn = false;
    }
  }
}
</script>

<style scoped lang="scss"></style>
