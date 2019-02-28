<template>
  <div id="home">
    <ContentSquare
            v-for="square in squares"
            :key="square.backgroundImageUrl"
            :backgroundImageUrl="square.backgroundImageUrl"
            :detailsHTML="square.detailsHTML"
            :title="square.title"
            :company="square.company"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ContentSquare from './ContentSquare.vue';

  @Component({
    components: {
      ContentSquare,
    },
  })
  export default class Home extends Vue {

    public squares = [];

    public mounted() {
      fetch('/api/squares.json')
        .then((response) => response.json())
        .then((squares) => this.squares = squares);
    }
  }
</script>

<style lang="scss">


</style>
