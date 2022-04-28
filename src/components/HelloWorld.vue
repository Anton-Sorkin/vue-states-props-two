<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <Header :todo="shop"></Header>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "../models/Todo";
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";
@Options({
  props: {
    msg: String,
  },
  components: {
    Header,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  shop: Todo = new Todo("Handla");
}
</script>
