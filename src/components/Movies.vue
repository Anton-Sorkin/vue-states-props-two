<template>
  <div>
    <input
      type="text"
      placeholder="Sök film"
      v-model="userInput"
      @keypress.enter="handleClick"
    />
    <button @click="handleClick">Sök</button>
    <div v-for="m in movies" :key="m.imdbID">
      <h3>{{ m.Title }}</h3>
      <img :src="m.Poster" :alt="m.Title" />
      <p>{{ m.Year }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IMovie } from "../models/IMovie";
import { MainService } from "../service/MainService";
import { Randomizer } from "../models/Randomizer";

@Options({
  components: {},
})
export default class Movies extends Vue {
  movies: IMovie[] = [];
  userInput = "";
  s = "";
  staticInput = this.randomString(this.s);

  //   movieNames: Randomizer[] = [
  //     new Randomizer("Lord"),
  //     new Randomizer("Shrek"),
  //     new Randomizer("Star"),
  //     new Randomizer("Movie"),
  //     new Randomizer("Disney"),
  //     new Randomizer("Death"),
  //   ];

  mounted() {
    let service = new MainService();
    service.getMovies(this.staticInput).then((movies) => {
      this.movies = movies;
    });
  }
  handleClick() {
    let search = new MainService();
    search.getSearch(this.userInput).then((search) => {
      this.movies = search;
    });

    this.userInput = "";
  }

  randomString(s: string) {
    let characters = "abcdefghiklmnopqrstuvwxyz";

    let lenString = 3;

    for (var i = 0; i < lenString; i++) {
      var rnum = Math.floor(Math.random() * characters.length);
      s += characters.substring(rnum, rnum + 1);
    }
    return s;
  }
}
</script>

<style scoped lang="scss"></style>
