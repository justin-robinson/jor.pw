<template>
  <nav class="nav">
    <img class="headshot" :src="headshotImageUrl(headshotImageName)" alt="headshot">
    <h1 class="full-name-container">
      <span class="full-name">{{ fullName }}</span>
    </h1>
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

    @media #{$tablet} {
      --default-nav-height: 90px;
      --default-nav-shrink: 0px;
      overflow: hidden;
    }

    .headshot {
      position: absolute;
      left: var(--padding);
      top: var(--padding);
      height: var(--headshot-height);
      border-radius: 50%;
      transition: height 1s, border-radius 1s;
      @media #{$tablet} {
        --headshot-height: calc(var(--global-nav-height, var(--default-nav-height)) / 2);
      }
    }

    .full-name-container {
      text-align: left;
      margin: 0 auto;
      font-size: calc(var(--global-nav-height, var(--default-nav-height)) - var(--global-nav-shrink, var(--default-nav-shrink)) - 10px);
      font-weight: normal;
      display: block;
      width: 100vw;
      transform: translate(50%, -50%);
      top: 50%;
      position: relative;
      transition: transform 1s, padding-left 1s, font-size 1s;

      @media #{$phone} {
        font-size: 10vw;
      }

      .full-name {
        display: inline-block;
        transform: translateX(-50%);
        transition: transform 1s;
      }
    }

    &.shrink {
      @media #{$desktop} {

        .full-name-container {
          transform: translate(0, -50%);
          padding-left: calc(var(--headshot-height) + var(--padding)*2);

          .full-name {
            transform: translateX(0%);
          }
        }
      }
    }
  }
</style>
