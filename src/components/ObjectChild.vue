<template>
  <div>
    <h2>{{ animalName }}</h2>
    <p>{{ animalAge }}</p>
    <img src="{{animalImage}}" alt="{{animalName}}" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  components: {},
})
export default class ObjectChild extends Vue {
  @Prop() animalName: string;
  @Prop() animalAge: number;
  @Prop() animalImage: string;
  @Prop() animalGender: boolean;
}
</script>

<style scoped lang="scss"></style>
