<template>
  <div id="app">
    <Nav/>
    <div class="grid">
      <div class="item">
        <Home/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Home from './components/Home.vue';
  import Nav from './components/Nav.vue';

  @Component({
    components: {
      Home, Nav
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  @import "./scss/global.scss";

  body {
    margin: 0;
    background-color: #eee;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr [resume] minmax(auto, $tablet-width) 1fr;
  }

  .item {
    grid-column: resume;
  }
</style>
