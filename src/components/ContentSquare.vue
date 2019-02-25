<template>
  <div class="section">
    <div class="section-padding">
      <div class="section-content">
        <img alt="company log" :src="getImgUrl(backgroundImageUrl)" v-bind:alt="backgroundImageUrl">
        <div class="content">
          <div class="header">
            <h2 class="company">{{ company }}</h2>
            <span class="title">{{ title }}</span>
          </div>
          <div class="details-wrapper">
            <div class="details" v-html="detailsHTML"></div>
          </div>
        </div>
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

    getImgUrl(pic) {
      return require('../assets/' + pic)
    }

  }
</script>

<style scoped lang="scss">
  $mobile-phone: "only screen and (max-width : 767px)";
  $section_height: 350px;
  $section_padding: 10px;

  $z-index: 0;
  @function next-z-index() {
    $z-index: $z-index + 1;
    @return $z-index;
  }

  .section {
    display: inline-block;
    width: 50%;
    z-index: next-z-index();
    @media #{$mobile-phone} {
      width: 100%;
    }

    .section-padding {
      padding: $section_padding;
      text-align: center;
      z-index: next-z-index();
    }

    .section-content {
      background: #ddd;
      border-radius: .2rem;
      border: 1px solid #888;
      height: $section_height - 2*$section_padding;
      position: relative;
      z-index: next-z-index();
    }

    .content {
      color: black;
      height: calc(100% - 2 * #{$section_padding});
      left: 0;
      padding: $section_padding;
      position: absolute;
      text-align: left;
      top: 0;
      width: calc(100% - 2 * #{$section_padding});
      z-index: next-z-index();
    }

    img {
      filter: alpha(opacity=30); /* For IE8 and earlier */
      height: 100%;
      max-height: 100%;
      max-width: calc(100% - 10px);
      object-fit: contain;
      opacity: 0.2;
    }

    .header {
      width: 100%;
      margin: 0;
      padding: 0 0 10px 0;
      position: relative;
      line-height: 20px;
      .company {
        margin: 0;
        position: absolute;
        left: 0;
      }
      .title {
        position: absolute;
        right: 0;
      }
    }


    .details {
      font-size: 1vw;
      ::v-deep ul {
        padding-left: $section_padding * 2;
      }
    }
  }

</style>
