<template>
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
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {
    private scrollYThreshold = 120;
    private hasShrunken = false;
    private nav = {
      fullName: '',
      headshotImageName: '',
      links: [],
    };

    private headshotImageUrl(imageName: string) {
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        return '';
      }
    }

    get lastLinkIndex() {
      return Object.keys(this.nav.links).length - 1;
    }

    private onScroll() {
      if (window.scrollY > this.scrollYThreshold) {
        this.hasShrunken = true;
        this.$el.classList.add('shrink');
        this.$el.classList.remove('expand');
      } else if (this.hasShrunken) {
        this.$el.classList.remove('shrink');
        this.$el.classList.add('expand');
      }
    }

    private beforeMount() {
      fetch('/api/nav.json')
        .then((response) => response.json())
        .then((nav) => this.nav = nav)
        .then(() => {
          window.addEventListener('scroll', this.onScroll);
        });
    }

    private beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/global";

  $nav-padding: 10px;
  $nav-scroll-shrink: 30px;
  $headshot-image-size: $nav-height - $nav-padding*2;
  $headshot-image-size-scroll: $headshot-image-size - 30px;
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
      border-radius: $headshot-image-size/2 + $nav-padding;
      @media #{$phone} {
        height: $headshot-image-size-phone;
        border-radius: $headshot-image-size-phone/2;
      }
    }

    .full-name {
      margin: 0;
      font-size: 3em;
      font-weight: normal;
      white-space: nowrap;
      @media #{$phone} {
        font-size: $nav-height-phone - $nav-padding;
        vertical-align: center;
      }
    }

    .contact {
      font-size: initial;
      position: absolute;
      bottom: 0;
      margin: 0;
      width: 100%;
      white-space: nowrap;
      .link {
        color: $font-color;
      }

      @media #{$phone} {
        display: none;
      }
    }

    @keyframes shrink-nav {
      from {
        height: $nav-height;
      }
      to {
        height: $nav-height - $nav-scroll-shrink;
      }
    }

    @keyframes expand-nav {
      from {
        height: $nav-height - $nav-scroll-shrink;
      }
      to {
        height: $nav-height;
      }
    }

    @keyframes shrink-nav-headshot {
      from {
        height: $headshot-image-size;
        border-radius: $headshot-image-size/2;
      }
      to {
        height: $headshot-image-size - $nav-scroll-shrink;
        border-radius: ($headshot-image-size - $nav-scroll-shrink)/2;
      }
    }

    @keyframes expand-nav-headshot {
      from {
        height: $headshot-image-size - $nav-scroll-shrink;
        border-radius: ($headshot-image-size - $nav-scroll-shrink)/2;
      }
      to {
        height: $headshot-image-size;
        border-radius: $headshot-image-size/2;
      }
    }

    @keyframes shrink-nav-full-name {
      from {
        padding-left: 0;
        width: 100%;
      }
      to {
        width: 0;
        padding-left: #{$headshot-image-size - $nav-scroll-shrink + $nav-padding*2};
      }
    }

    @keyframes expand-nav-full-name {
      from {
        width: 0;
        padding-left: #{$headshot-image-size - $nav-scroll-shrink + $nav-padding*2};
      }
      to {
        width: 100%;
        padding-left: 0;
      }
    }

    @keyframes shrink-nav-contact {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes expand-nav-contact {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &.shrink {
      @media #{$not-mobile} {
        animation: shrink-nav 1s 0s 1 normal forwards;

        .headshot {
          animation: shrink-nav-headshot 1s 0s 1 normal forwards;
        }

        .full-name {
          animation: shrink-nav-full-name 1s 0s 1 normal forwards;
          float: left;
        }

        .contact {
          animation: shrink-nav-contact 1s 0s 1 normal forwards;
        }
      }
    }

    &.expand {
      @media #{$not-mobile} {
        animation: expand-nav 1s 0s 1 normal forwards;

        .headshot {
          animation: expand-nav-headshot 1s 0s 1 normal forwards;
        }

        .full-name {
          animation: expand-nav-full-name 1s 0s 1 normal forwards;
        }

        .contact {
          animation: expand-nav-contact 1s 0s 1 normal forwards;
        }
      }
    }
  }

  .hidden {
    position: unset;
    visibility: hidden;
  }

</style>
