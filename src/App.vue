<template>
  <div id="app">
    <Nav
            v-bind:scrollPosition="scrollTop"
            :fullName="$store.state.nav.fullName"
            :headshotImageName="$store.state.nav.headshotImageName"
            :links="$store.state.nav.links"
    />
    <div class="grid">
      <div class="item">
        <Home/>
      </div>
    </div>
    <DeviceType/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Home from '@/components/Home.vue';
  import Nav from '@/components/Nav.vue';
  import DeviceType from '@/components/DeviceType.vue';

  @Component({
    components: {
      DeviceType, Home, Nav,
    },
  })
  export default class App extends Vue {
    private scrollTop = 0;

    private onScroll() {
      this.scrollTop = window.scrollY;
    }

    private beforeMount() {
      window.addEventListener('scroll', this.onScroll);
      this.$store.dispatch('fetchNav');
    }

    private beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
</script>

<style>
  :root {
    --color-primary: #ff9900;
    --font-color-primary: #000;
    --font-color-secondary: #fff;
  }
</style>

<style lang="scss">
  @import "scss/global";

  :root {
    --global-nav-height: 90px;
    --global-nav-shrink: 0px;

    @media #{$phone} {
      --global-nav-height: 80px;
    }
  }

  @font-face {
    font-family: "GT-Walsheim";
    src: url("/fonts/GT-Walsheim-Pro-Regular.woff2");
  }

  body {
    margin: var(--global-nav-height) 0 0 0;
    background-color: #ddd;
  }

  .sticky {
    position: sticky;
    transition: top 1s;
    top: calc(var(--global-nav-height) - var(--global-nav-shrink));
  }

  #app {
    font-family: 'GT-Walsheim', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--font-color-secondary);
  }

  .grid {
    height: 100%;
    width: 100vw;
    display: grid;
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
