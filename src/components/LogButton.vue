<template>
  <Button />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "./Button.vue";

@Options({
  components: {
    Button,
  },
})
export default class LogButton extends Vue {}
</script>

<style scoped lang="scss"></style>
