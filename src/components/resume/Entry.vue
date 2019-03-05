<template>
  <div class="content">
    <div class="header" v-if="title">
      <div class="header-left">
        <img class="background" alt="company logo" :src="getImgUrl(imageName)" v-bind:alt="imageName" v-if="imageName">
      </div>
      <div class="header-right">
        <span class="block subtitle">{{ subtitle }}</span>
        <span class="block">{{ headerRightTitle }}</span>
        <span class="block">{{ headerRightSubtitle }}</span>
      </div>
    </div>
    <div class="details" v-html="detailsHTML"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Entry extends Vue {
    @Prop() private detailsHTML!: string;
    @Prop() private imageName!: string;
    @Prop() private headerRightSubtitle!: string;
    @Prop() private subtitle!: string;
    @Prop() private headerRightTitle!: string;
    @Prop() private title!: string;

    private getImgUrl(imageName: string): string {
      return require(`@/assets/${imageName}`);
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
      margin-right: 10px;
      .background {
        max-width: 100%;
        max-height: 100px;
        width: auto;
        height: auto;
        object-fit: contain;
      }
    }

    .header-right {
      font-size: .8em;
      grid-column: right;
      text-align: right;
      .subtitle {
        font-weight: 900;
      }
    }
  }

  .details {
    font-size: 1.2em;
    display: inline-block;
    position: relative;
    z-index: z(grid, details);
    color: $font-color-primary;

    ::v-deep {
      ul {
        padding: 0 0 0 ($padding * 2);
        margin: 0;

        li {
          margin: 1em 0;
        }
      }

      a {
        color: $font-color-primary;
      }
    }
  }

</style>
