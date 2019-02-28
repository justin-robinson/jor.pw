<template>
  <div class="section">
      <div class="content">
        <div class="header">
          <h2 class="company">{{ company }}</h2>
          <span class="title">{{ title }}</span>
        </div>
        <div class="details" v-html="detailsHTML"></div>
        <img class="background" alt="company log" :src="getImgUrl(backgroundImageUrl)" v-bind:alt="backgroundImageUrl">
      </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class ContentSquare extends Vue {
    @Prop() private backgroundImageUrl!: string;
    @Prop() private detailsHTML!: string;
    @Prop() private title!: string;
    @Prop() private company!: string;

    public getImgUrl(pic: string): string {
      return require('../assets/' + pic);
    }

  }
</script>

<style scoped lang="scss">
  @import "../scss/global.scss";
  $between_sections_padding: 20px;
  $inner_section_padding: 10px;

  .section {
    position: relative;
    background: #ddd;
    margin: $between_sections_padding;
    padding: $between_sections_padding;
    border-radius: 4px;
    -webkit-box-shadow: 2px 2px 14px 3px #999;
    -moz-box-shadow: 2px 2px 14px 3px #999;
    box-shadow: 2px 2px 14px 3px #999;

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
        padding: 0 0 0 ($inner_section_padding * 2);
        margin: 0;
      }
    }

    .background {
      height: calc(100% - #{$inner_section_padding * 2});
      left: 0;
      margin: $inner_section_padding;
      object-fit: contain;
      opacity: .2;
      filter: alpha(opacity=20); /* For IE8 and earlier */
      position: absolute;
      top: 0;
      vertical-align: middle;
      width: calc(100% - #{$inner_section_padding * 2});
      z-index: z(grid, background);
    }
  }

</style>
