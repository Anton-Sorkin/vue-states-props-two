<template>
  <div>
    <h2>{{ randomText }}</h2>
    {{ textInput }}

    <input v-model="textInput" />

    <ul>
      <a href="#">
        <li>Walk a dog</li>
      </a>
      <a href="#">
        <li>Walk a cat</li>
      </a>
      <a href="#">
        <li>Walk a frog</li>
      </a>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  components: {},
})
export default class HeaderChild extends Vue {
  @Prop() textInput!: string;
  @Prop() randomText!: string;
  @Prop() pressedBtn!: boolean;
}
</script>

<style scoped lang="scss"></style>
