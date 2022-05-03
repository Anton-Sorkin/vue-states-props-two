<template>
  <div class="container">
    <form
      @submit.prevent
      :class="[{ background: activateBackground }, 'myform']"
    >
      <input type="text" placeholder="Firstname" v-model="firstname" />
      <input type="text" placeholder="Lastname" v-model="lastname" />
      <button @click="logHandler" @keypress.enter="logHandler">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Button extends Vue {
  firstname = "";
  lastname = "";
  activateBackground = false;
  logHandler() {
    console.log(this.firstname + "" + this.lastname);
    this.activateBackground = true;
    this.firstname = "";
    this.lastname = "";
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  .background {
    background-color: green;
  }
  .myform {
    width: 400px;
    height: 600px;
    border: 2px solid black;
  }
}
</style>
