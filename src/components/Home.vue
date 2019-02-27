<template>
  <div id="home">
    <div class="justin">
      Justin Robinson
      <div class="contact"><a href="mailto:jrob09bhs@gmail.com">jrob09bhs@gmail.com</a> | <a href="tel:18033209005">803.320.9005</a> | <a href="https://github.com/justin-robinson">github.com/justin-robinson</a></div>
    </div>
    <div class="flexbox">
      <ContentSquare
              v-for="square in squares"
              :key="square.backgroundImageUrl"
              :backgroundImageUrl="square.backgroundImageUrl"
              :detailsHTML="square.detailsHTML"
              :title="square.title"
              :company="square.company"/>
    </div>
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
  $font-color: #2c3e50;
  $nav-height: 90px;
  $phone: "only screen and (max-width : 600px)";
  $tablet: "only screen and (max-width : 768px)";

  .justin {
    position: fixed;
    top: 0;
    z-index: 100;
    height: $nav-height;
    width: 100%;
    font-size: 3em;
    background: #bbb;
    .contact {
      font-size: initial;
      a {
        color: $font-color;
      }
    }
  }

  .flexbox {
    margin-top: $nav-height;
  }
</style>
