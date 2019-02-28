<template>
  <div id="nav">
    <template v-for="i in 2">
      <nav v-bind:class="{ nav: true, hidden: i === 2}">
        <span>{{ nav.fullName }}</span>
        <div class="contact">
          <template v-for="(link, index) in nav.links">
            <a class="link" v-bind:href="link.href">{{ link.text }}</a>
            <span v-if="index !== lastLinkIndex"> | </span>
          </template>
        </div>
      </nav>
    </template>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {
    private nav = {
      fullName: '',
      links: [],
    };

    get lastLinkIndex() {
      return Object.keys(this.nav.links).length - 1;
    }

    private mounted() {
      fetch('/api/nav.json')
        .then((response) => response.json())
        .then((nav) => this.nav = nav);
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/global";

  .nav {
    position: fixed;
    top: 0;
    z-index: z(nav);
    min-height: $nav-min-height;
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
