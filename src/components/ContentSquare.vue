<template>
  <div class="section col-2">
    <div class="section-padding">
      <div class="content-wrapper">
        <div class="content">
          <div class="header">
            <h2 class="company">{{ company }}</h2>
            <span class="title">{{ title }}</span>
          </div>
          <div class="details" v-html="detailsHTML"></div>
        </div>
        <img class="background" alt="company log" :src="getImgUrl(backgroundImageUrl)" v-bind:alt="backgroundImageUrl">
      </div>
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
  $section_height: 500px;
  $section_padding: 10px;

  $z-index: 0;
  @function next-z-index() {
    $z-index: $z-index + 1;
    @return $z-index;
  }

  .section {
    z-index: next-z-index();
    display: inline-flex;
    height: $section_height;
    width: 100%;
    margin: $section_padding;

    .section-padding {
      //padding: $section_padding;
      text-align: center;
      z-index: next-z-index();
      width: 100%;
      height: 100%;
    }

    .content-wrapper {
      background: #ddd;
      border-radius: .2rem;
      border: 1px solid #888;
      position: relative;
      z-index: next-z-index();
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    .content {
      color: black;
      left: 0;
      padding: $section_padding;
      position: absolute;
      text-align: left;
      height: 100%;
      z-index: next-z-index();
    }

    .background {
      filter: alpha(opacity=30); /* For IE8 and earlier */
      height: $section_height * .9;
      margin-top: ($section_height * .1) / 2;
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      opacity: 0.2;
      vertical-align: middle;
    }

    .header {
      width: 100%;
      margin: 0;
      padding: 0 0 10px 0;
      //position: relative;
      line-height: 20px;
      .company {
        margin: 0;
        //position: absolute;
        left: 0;
      }
      .title {
        //position: absolute;
        right: 0;
      }
    }


    .details {
      font-size: 1.2em;
      display: inline-block;
      ::v-deep ul {
        padding-left: $section_padding * 2;
      }
    }
  }

</style>
