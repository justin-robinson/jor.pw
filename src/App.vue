<template>
  <div id="app">
    <div>
      <nav class="nav">
        Justin Robinson
        <div class="contact"><a class="link" href="mailto:jrob09bhs@gmail.com">jrob09bhs@gmail.com</a> | <a class="link" href="tel:18033209005">803.320.9005</a> | <a class="link" href="https://github.com/justin-robinson">github.com/justin-robinson</a></div>
      </nav>
      <nav class="nav hidden">
        Justin Robinson
        <div class="contact"><a class="link" href="mailto:jrob09bhs@gmail.com">jrob09bhs@gmail.com</a> | <a class="link" href="tel:18033209005">803.320.9005</a> | <a class="link" href="https://github.com/justin-robinson">github.com/justin-robinson</a></div>
      </nav>
    </div>
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

  @Component({
    components: {
      Home,
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

  .nav {
    position: fixed;
    top: 0;
    z-index: z(nav);
    min-height: $nav-height;
    height: auto;
    width: 100%;
    font-size: 3em;
    background: #bbb;
    .contact {
      font-size: initial;
      .link {
        color: $font-color;
      }
    }
  }

  .hidden {
    position: unset;
    visibility: hidden;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr [resume] minmax(auto, $tablet-width) 1fr;
  }

  .item {
    grid-column: resume;
  }
</style>
