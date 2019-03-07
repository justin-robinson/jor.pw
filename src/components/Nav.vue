<template>
  <nav class="nav">
    <img class="headshot" :src="headshotImageUrl(headshotImageName)" alt="headshot">
    <h1 class="full-name-container">
      <span class="full-name">{{ fullName }}</span>
    </h1>
    <div class="contacts-scroller">
      <div class="contacts">
        <div class="contact" v-for="link in links">
          <a class="link" v-bind:href="link.href">{{ link.text }}</a>
        </div>
      </div>
    </div>
  </nav>
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
        const navShrink = getComputedStyle(this.$el).getPropertyValue('--default-nav-shrink');
        document.documentElement.style.setProperty('--global-nav-shrink', navShrink);
      } else if (this.hasShrunken && scrollPosition < this.scrollYThreshold / 2) {
        this.$el.classList.remove('shrink');
        const navShrink = getComputedStyle(this.$el).getPropertyValue('--default-nav-no-shrink');
        document.documentElement.style.setProperty('--global-nav-shrink', navShrink);
      }
    }

    private headshotImageUrl(imageName: string) {
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        return '';
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/global";

  .nav {
    --default-nav-height: 90px;
    --default-nav-no-shrink: 0px;
    --default-nav-shrink: 30px;
    --headshot-height: calc(var(--global-nav-height, var(--default-nav-height)) - var(--global-nav-shrink, var(--default-nav-shrink)) - (var(--padding) * 2));
    --padding: 10px;
    transition: height 1s;
    height: calc(var(--global-nav-height, var(--default-nav-height)) - var(--global-nav-shrink, var(--default-nav-shrink)));
    position: fixed;
    top: 0;
    z-index: z(nav);
    width: 100vw;
    background: var(--color-primary);
    color: var(--font-color-secondary);

    @media #{$phone} {
      --default-nav-height: 90px;
      --default-nav-shrink: 0px;
      overflow: hidden;
    }

    .headshot {
      position: absolute;
      left: var(--padding);
      top: var(--padding);
      height: var(--headshot-height);
      border-radius: calc(var(--headshot-height) /2);
      transition: height 1s, border-radius 1s;
      @media #{$phone} {
        --headshot-height: calc(var(--global-nav-height, var(--default-nav-height)) / 2);
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
      font-size: 1em;
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
        scroll-snap-stop: always;
        scroll-snap-type: x mandatory;
        scroll-snap-points-x: repeat(100%);
        scroll-snap-type: mandatory;
      }

      .contact {
        display: inline-block;
        --icon-size: 16px;

        .link {
          color: var(--font-color-secondary);
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
            height: var(--icon-size);
            width: var(--icon-size);
            transform: rotate(180deg);
          }
        }

        &::after {
          content: '\2022';
          width: 15px;
          display: inline-block;
          text-align: center;
          @media #{$phone} {
            background: url('/assets/right-arrow.svg');
            content: '';
            float: right;
            height: var(--icon-size);
            width: var(--icon-size);
          }
        }

        &:first-child:before, &:last-child:after {
          background: unset;
          content: '';
        }
      }
    }

    &.shrink {
      @media #{$not-mobile} {

        .full-name-container {
          transform: translateX(0%);
          padding-left: calc(var(--headshot-height) + var(--padding)*2);

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
