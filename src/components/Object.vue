<template>
  <div>
    <ObjectChild
      :animalName="me.name"
      :animalAge="me.age"
      :animalImage="me.image"
      :animalGender="me.isMale"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Animal } from "../models/Animal";
import ObjectChild from "../components/ObjectChild.vue";
@Options({
  components: { ObjectChild },
})
export default class Object extends Vue {
  me: Animal = new Animal(
    "Katt",
    10,
    "https://bozita.com/se/wp-content/uploads/sites/5/2021/08/Bozita_Kitten_lax_optimized-new-a.png",
    false
  );
}
</script>

<style scoped lang="scss"></style>
