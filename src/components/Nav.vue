<template>
  <div id="nav">
    <nav class="nav">
      <img class="headshot" :src="headshotImageUrl(nav.headshotImageName)" alt="headshot">
      <h1 class="full-name">{{ nav.fullName }}</h1>
      <div class="contact">
        <template v-for="(link, index) in nav.links">
          <a class="link" v-bind:href="link.href">{{ link.text }}</a>
          <span v-if="index !== lastLinkIndex"> | </span>
        </template>
      </div>
    </nav>
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

    private headshotImageUrl(imageName: string) {
      return require(`@/assets/${imageName}`);
    }

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

  $nav-padding: 10px;
  $headshot-image-size: $nav-height - $nav-padding*2;
  $headshot-image-size-phone: $nav-height-phone - $nav-padding*2;

  .nav {
    position: fixed;
    top: 0;
    z-index: z(nav);
    height: $nav-height;
    width: 100%;
    background: #bbb;
    @media #{$phone} {
      height: $nav-height-phone;
    }

    .headshot {
      position: absolute;
      left: $nav-padding;
      top: $nav-padding;
      height: $headshot-image-size;
      border-radius: $headshot-image-size/2;
      @media #{$phone} {
        height: $headshot-image-size-phone;
        border-radius: $headshot-image-size-phone/2;
      }
    }

    .full-name {
      font-size: 3em;
      font-weight: normal;
      margin: 0;
      @media #{$phone} {
        font-size: $nav-height-phone - $nav-padding;
        vertical-align: center;
      }
    }

    .contact {
      font-size: initial;

      .link {
        color: $font-color;
      }

      @media #{$phone} {
        display: none;
      }
    }
  }

  .hidden {
    position: unset;
    visibility: hidden;
  }

</style>
