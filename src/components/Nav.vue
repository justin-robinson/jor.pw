<template>
  <div id="nav">
    <nav class="nav">
      <span>Justin Robinson</span>
      <div class="contact"><a class="link" href="mailto:jrob09bhs@gmail.com">jrob09bhs@gmail.com</a> | <a class="link" href="tel:18033209005">803.320.9005</a> | <a class="link" href="https://github.com/justin-robinson">github.com/justin-robinson</a></div>
    </nav>
    <nav class="nav hidden">
      Justin Robinson
      <div class="contact"><a class="link" href="mailto:jrob09bhs@gmail.com">jrob09bhs@gmail.com</a> | <a class="link" href="tel:18033209005">803.320.9005</a> | <a class="link" href="https://github.com/justin-robinson">github.com/justin-robinson</a></div>
    </nav>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ContentSquare from './ContentSquare.vue';

  @Component
  export default class Nav extends Vue {
  }
</script>

<style scoped lang="scss">
  @import "../scss/global.scss";

  .nav {
    position: fixed;
    top: 0;
    z-index: z(nav);
    min-height: $nav-height;
    height: auto;
    width: 100%;
    font-size: 3em;
    background: #bbb;
    padding: 0 0 10px 0;
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

</style>
