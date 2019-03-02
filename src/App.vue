<template>
  <div id="app">
    <Nav
            v-bind:scrollPosition="scrollTop"
            :fullName="$store.state.nav.fullName"
            :headshotImageName="$store.state.nav.headshotImageName"
            :links="$store.state.nav.links"
    />
    <div class="grid" ref="grid" v-on:scroll="onScroll">
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
      this.scrollTop = (this.$refs.grid as HTMLDivElement).scrollTop;
    }

    private beforeMount() {
      this.$store.dispatch('fetchNav');
    }
  }
</script>

<style lang="scss">
  @import "scss/global";

  @font-face {
    font-family: "GT-Walsheim";
    src: url("/fonts/GT-Walsheim-Pro-Regular.woff2");
  }

  body {
    margin: 0;
    background-color: #ddd;
  }

  #app {
    font-family: 'GT-Walsheim', 'Avenir', Helvetica, Arial, sans-serif;
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
