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
        this.$el.classList.remove('expand');
      } else if (this.hasShrunken && scrollPosition < this.scrollYThreshold / 2 ) {
        this.$el.classList.remove('shrink');
        this.$el.classList.add('expand');
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
        bottom: 5px;
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
    }

    &.shrink {
      @media #{$not-mobile} {
        &, .nav {
          animation: shrink-nav 1s 0s 1 normal forwards;
        }

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
        &, .nav {
          animation: expand-nav 1s 0s 1 normal forwards;
        }

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

</style>
