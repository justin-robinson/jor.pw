<template>
  <div class="content">
    <div class="header">
      <div class="header-left">
        <h3 class="block company">{{ company }}</h3>
        <span class="block title">{{ title }}</span>
      </div>
      <div class="header-right">
        <span class="block">{{ tenure }}</span>
        <span class="block">{{ location }}</span>
      </div>
    </div>
    <div class="details" v-html="detailsHTML"></div>
    <img class="background" alt="company log" :src="getImgUrl(imageName)" v-bind:alt="imageName">
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Entry extends Vue {
    @Prop() private company!: string;
    @Prop() private detailsHTML!: string;
    @Prop() private imageName!: string;
    @Prop() private location!: string;
    @Prop() private tenure!: string;
    @Prop() private title!: string;

    private getImgUrl(pic: string): string {
      return pic ? require(`@/assets/${pic}`) : '';
    }

  }
</script>

<style scoped lang="scss">
  @import "../../scss/global";

  $padding: 10px;

  .content {
    color: black;
    text-align: left;
    width: 100%;
    height: 100%;
  }

  .header {
    display: grid;
    grid-template-columns: [left] auto [right] auto;
    width: 100%;
    margin: 0;
    padding: 0 0 10px 0;
    line-height: 20px;
    z-index: z(grid, header);

    .header-left {
      grid-column: left;
      text-align: left;
      .company {
        margin: 0;
      }
    }

    .header-right {
      font-size: .8em;
      grid-column: right;
      text-align: right;
    }
  }

  .details {
    font-size: 1.2em;
    display: inline-block;
    position: relative;
    z-index: z(grid, details);

    ::v-deep {
      ul {
        padding: 0 0 0 ($padding * 2);
        margin: 0;
      }

      a {
        color: $font-color;
      }
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
