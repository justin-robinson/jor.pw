<template>
  <div id="nav">
    <template v-for="i in 2">
      <nav v-bind:class="{ nav: true, hidden: i === 2}">
        <span>{{ fullName }}</span>
        <div class="contact">
          <template v-for="(link, index) in links">
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
    private fullName = 'Justin Robinson';
    private links = [
      {
        href: 'mailto:jrob09bhs@gmail.com',
        text: 'jrob09bhs@gmail.com',
      },
      {
        href: 'tel:18033209005',
        text: '803.320.9005',
      },
      {
        href: 'https://github.com/justin-robinson',
        text: 'github.com/justin-robinson',
      },
      {
        href: 'https://www.linkedin.com/in/justin-robinson-0734a665/',
        text: 'LinkedIn',
      },
    ];

    get lastLinkIndex() {
      return Object.keys(this.links).length - 1;
    }
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
