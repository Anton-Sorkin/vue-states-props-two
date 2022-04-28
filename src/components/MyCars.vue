<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Car } from "../models/Car";

@Options({
  components: {},
})
export default class MyCars extends Vue {}
</script>

<style scoped lang="scss"></style>
