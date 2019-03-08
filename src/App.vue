<template>
  <div id="app">
    <Nav
            v-bind:scrollPosition="scrollTop"
            :fullName="$store.state.nav.fullName"
            :headshotImageName="$store.state.nav.headshotImageName"
    />
    <div class="grid">
      <div class="item">
        <Home/>
      </div>
    </div>
    <Button :secondary-buttons="$store.state.nav.links"/>
    <DeviceType/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Button from '@/components/floatingActionButton/Button.vue';
  import DeviceType from '@/components/DeviceType.vue';
  import Home from '@/components/Home.vue';
  import Nav from '@/components/Nav.vue';

  @Component({
    components: {
      DeviceType, Button, Home, Nav,
    },
  })
  export default class App extends Vue {
    private scrollTop: number = window.scrollY;

    private onScroll() {
      this.scrollTop = window.scrollY;
    }

    private beforeMount() {
      window.addEventListener('scroll', this.onScroll);
      this.$store.dispatch('fetchNav');
    }

    private mounted() {
      this.injectHeaderTags(document.head);
    }

    private injectHeaderTags(head: HTMLHeadElement) {
      const colorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
      head.appendChild(this.createMetaTag({name: 'theme-color', content: colorPrimary}));
    }

    private createMetaTag(values: {[key: string]: string}) {
      const meta = document.createElement('meta');
      Object.keys(values).forEach((key) => meta.setAttribute(key, values[key]));
      return meta;
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
  :root {
    --global-nav-height: 90px;
    --global-nav-shrink: 0px;

    @media #{$tablet} {
      --global-nav-height: 80px;
    }

    @media #{$phone} {
      --global-nav-height: 60px;
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
