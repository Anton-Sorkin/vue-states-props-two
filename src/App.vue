<template>
  <div>
    <!-- <Header />
    <Parent /> -->
    <!-- <Object /> -->
    <LogButton />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Parent from "./components/Parent.vue";
import Header from "./components/Header.vue";
import Object from "./components/Object.vue";
import LogButton from "./components/LogButton.vue";

@Options({
  components: {
    Parent,
    Header,
    Object,
    LogButton,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
