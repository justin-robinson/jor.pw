<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <img class="headshot" :src="headshotImageUrl(headshotImageName)" alt="headshot">
      <h1 class="full-name-container">
        <span class="full-name">{{ fullName }}</span>
      </h1>
      <div class="contacts-scroller">
        <div class="contacts">
          <div class="contact" v-for="(link, index) in links">
            <a class="link" v-bind:href="link.href">{{ link.text }}</a>
            <span v-if="index !== lastLinkIndex"></span>
          </div>
        </div>
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
      } else if (this.hasShrunken && scrollPosition < this.scrollYThreshold / 2) {
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
  $nav-height-phone: 80px;
  $nav-padding: 10px;
  $nav-scroll-shrink: 30px;
  $headshot-image-size: $nav-height - $nav-padding*2;
  $headshot-image-size-scroll: $headshot-image-size - 30px;
  $headshot-image-size-phone: 40px;

  $contact-font-size: 1em;

  $icon-size: 16px;

  .nav-wrapper {
    height: $nav-height;

    &, .nav {
      transition: height 1s;
    }

    @media #{$phone} {
      height: $nav-height-phone;
    }

    .nav {
      position: fixed;
      top: 0;
      z-index: z(nav);
      height: $nav-height;
      width: 100vw;
      background: $color-primary;
      color: $font-color-secondary;
      @media #{$phone} {
        height: $nav-height-phone;
        box-shadow: unset;
        overflow: hidden;
      }

      .headshot {
        position: absolute;
        left: $nav-padding;
        top: $nav-padding;
        height: $headshot-image-size;
        border-radius: $headshot-image-size/2 + $nav-padding;
        transition: height 1s, border-radius 1s;
        @media #{$phone} {
          height: $headshot-image-size-phone;
          border-radius: $headshot-image-size-phone/2;
        }
      }

      .full-name-container {
        text-align: left;
        margin: 0 auto;
        font-size: 3em;
        font-weight: normal;
        display: block;
        width: 100vw;
        transform: translateX(50%);
        transition: transform 1s, padding-left 1s;

        .full-name {
          display: inline-block;
          transform: translateX(-50%);
          transition: transform 1s;
          @media #{$phone} {
            font-size: 0.8em;
            vertical-align: center;
          }
        }
      }


      .contacts-scroller {
        width: 100vw;
        @media #{$not-mobile} {
          display: block;
          text-align: left;
          transform: translateX(50%);
          transition: transform 1s;
        }
        @media #{$phone} {
          overflow: hidden;
          position: relative;
          height: 100%
        }
      }

      .contacts {
        display: inline-block;
        font-size: $contact-font-size;
        bottom: 5px;
        margin: 0;
        white-space: nowrap;
        transition: transform 1s;
        @media #{$not-mobile} {
          transform: translateX(-50%);
        }
        @media #{$phone} {
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          overflow: auto;
          scroll-snap-type: x mandatory;
          scroll-snap-stop: always;
        }

        .contact {
          display: inline-block;

          .link {
            color: $font-color-secondary;
          }

          @media #{$phone} {
            width: 100vw;
            scroll-snap-align: start;
          }

          &::before {
            display: inline-block;
            @media #{$phone} {
              background: url('/assets/right-arrow.svg');
              content: '';
              float: left;
              height: $icon-size;
              transform: rotate(180deg);
              width: $icon-size;
            }
          }

          &::after {
            content: '|';
            width: 15px;
            display: inline-block;
            text-align: center;
            @media #{$phone} {
              background: url('/assets/right-arrow.svg');
              content: '';
              float: right;
              height: $icon-size;
              width: $icon-size;
            }
          }

          &:first-child:before, &:last-child:after {
            background: unset;
            content: '';
          }
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

        .full-name-container {
          transform: translateX(0%);
          padding-left: #{$headshot-image-size - $nav-scroll-shrink + $nav-padding*2};

          .full-name {
            transform: translateX(0%);
          }
        }

        .contacts-scroller {
          transform: translateX(100%);

          .contacts {
            transform: translate(-100%, -2em);
          }
        }
      }
    }
  }

</style>
