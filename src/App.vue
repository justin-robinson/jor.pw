<template>
  <div id="app">
    <Nav
            v-bind:scrollPosition="scrollTop"
            :fullName="nav.fullName"
            :headshotImageName="nav.headshotImageName"
            :links="nav.links"
    />
    <div class="grid" ref="grid" v-on:scroll="onScroll">
      <div class="item">
        <Home/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Home from '@/components/Home.vue';
  import Nav from '@/components/Nav.vue';

  @Component({
    components: {
      Home, Nav,
    },
  })
  export default class App extends Vue {
    private scrollTop = 0;
    private nav = {
      fullName: '',
      headshotImageName: '',
      links: [],
    };

    private onScroll() {
      this.scrollTop = (this.$refs.grid as HTMLDivElement).scrollTop;
    }

    private beforeMount() {
      fetch('/api/nav.json')
        .then((response) => response.json())
        .then((nav) => this.nav = nav);
    }
  }
</script>

<style lang="scss">
  @import "scss/global";

  body {
    margin: 0;
    background-color: #ddd;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color;
  }

  .grid {
    height: 100%;
    width: 100%;
    position: fixed;
    display: grid;
    overflow-y: auto;
    grid-template-columns: 1fr [resume] minmax(auto, $tablet-width) 1fr;
    @media #{$phone} {
      grid-template-columns: 1fr [resume] minmax(auto, $phone-width) 1fr;
    }
  }

  .item {
    grid-column: resume;
    height: calc(100% + 90px);
  }
</style>
