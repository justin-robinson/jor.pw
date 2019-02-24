<template>
  <div id="home">
    <ContentSquare v-for="square in squares"
                   :content="square.content"
                   :backgroundImageUrl="square.backgroundImageUrl"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ContentSquare from './ContentSquare.vue';

  @Component({
    components: {
      ContentSquare,
    },
    data: () => {
      return {
        squares: null
      };
    },
    mounted () {
      fetch('/api/squares.json')
        .then(response => response.json())
        .then(squares => this.squares = squares)
    }
  })

  export default class Home extends Vue {
  }
</script>
