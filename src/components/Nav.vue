<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <img class="headshot" :src="headshotImageUrl(headshotImageName)" alt="headshot">
      <h1 class="full-name">{{ fullName }}</h1>
      <div class="contact">
        <template v-for="(link, index) in links">
          <a class="link" v-bind:href="link.href">{{ link.text }}</a>
          <span v-if="index !== lastLinkIndex"> | </span>
        </template>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

  @Component
  export default class Nav extends Vue {
    private scrollYThreshold = 120;
    private hasShrunken = false;

    @Prop() private fullName!: '';
    @Prop() private headshotImageName!: '';
    @Prop() private links!: object[];
    @Prop() private scrollPosition!: number;

    @Watch('scrollPosition')
    private onScrollPositionChanged(scrollPosition: number) {
      if (scrollPosition > this.scrollYThreshold) {
        this.hasShrunken = true;
        this.$el.classList.add('shrink');
      } else if (this.hasShrunken && scrollPosition < this.scrollYThreshold / 2 ) {
        this.$el.classList.remove('shrink');
      }
    }

    private headshotImageUrl(imageName: string) {
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        return '';
      }
    }

    get lastLinkIndex() {
      return Object.keys(this.links).length - 1;
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/global";

  $nav-height: 90px;
  $nav-height-phone: 45px;
  $nav-padding: 10px;
  $nav-scroll-shrink: 30px;
  $headshot-image-size: $nav-height - $nav-padding*2;
  $headshot-image-size-scroll: $headshot-image-size - 30px;
  $headshot-image-size-phone: $nav-height-phone - $nav-padding*2;

  .nav-wrapper {
    height: $nav-height;

    &, .nav {
      transition: height 1s ease;
    }

    @media #{$phone} {
      height: $nav-height-phone;
    }

    .nav {
      box-shadow: 0 0 60px -10px #999 inset;
      position: fixed;
      top: 0;
      z-index: z(nav);
      height: $nav-height;
      width: 100%;
      background: #eae825;
      @media #{$phone} {
        height: $nav-height-phone;
        box-shadow: unset;
      }

      .headshot {
        position: absolute;
        left: $nav-padding;
        top: $nav-padding;
        height: $headshot-image-size;
        border-radius: $headshot-image-size/2 + $nav-padding;
        transition: height 1s ease, border-radius 1s ease;
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
        width: 100%;
        transition: width 1s ease, padding-left 1s ease;
        @media #{$phone} {
          font-size: $nav-height-phone - $nav-padding;
          vertical-align: center;
        }
      }

      .contact {
        font-size: initial;
        position: absolute;
        bottom: 5px;
        margin: 0;
        width: 100%;
        white-space: nowrap;
        transition: opacity 1s ease;
        .link {
          color: $font-color;
        }

        @media #{$phone} {
          display: none;
        }
      }
    }

    &.shrink {
      @media #{$not-mobile} {
        &, .nav {
          height: $nav-height - $nav-scroll-shrink;
        }

        .headshot {
          height: $headshot-image-size - $nav-scroll-shrink;
          border-radius: ($headshot-image-size - $nav-scroll-shrink)/2;
        }

        .full-name {
          width: 0;
          padding-left: #{$headshot-image-size - $nav-scroll-shrink + $nav-padding*2};
          float: left;
        }

        .contact {
          opacity: 0;
        }
      }
    }
  }

</style>
