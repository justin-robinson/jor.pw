<template>
  <div class="content">
    <div class="header">
      <h2 class="company">{{ company }}</h2>
      <span class="title">{{ title }}</span>
    </div>
    <div class="details" v-html="detailsHTML"></div>
    <img class="background" alt="company log" :src="getImgUrl(imageName)" v-bind:alt="imageName">
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Job extends Vue {
    @Prop() private imageName!: string;
    @Prop() private detailsHTML!: string;
    @Prop() private title!: string;
    @Prop() private company!: string;

    public getImgUrl(pic: string): string {
      return require('@/assets/' + pic);
    }

  }
</script>

<style scoped lang="scss">
  @import "../../scss/global.scss";
  $padding: 10px;

  .content {
    color: black;
    text-align: left;
    width: 100%;
    height: 100%;
  }

  .header {
    width: 100%;
    margin: 0;
    padding: 0 0 10px 0;
    line-height: 20px;
    z-index: z(grid, header);
    .company {
      margin: 0;
      left: 0;
    }
    .title {
      right: 0;
    }
  }

  .details {
    font-size: 1.2em;
    display: inline-block;
    position: relative;
    z-index: z(grid, details);
    ::v-deep ul {
      padding: 0 0 0 ($padding * 2);
      margin: 0;
    }
  }

  .background {
    height: calc(100% - #{$padding * 2});
    left: 0;
    margin: $padding;
    object-fit: contain;
    opacity: .2;
    filter: alpha(opacity=20); /* For IE8 and earlier */
    position: absolute;
    top: 0;
    vertical-align: middle;
    width: calc(100% - #{$padding * 2});
    z-index: z(grid, background);
  }

</style>
