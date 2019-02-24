<template>
  <div class="section">
    <div class="section-padding">
      <div class="section-content">
        <img alt="Vue logo" :src="backgroundImageUrl">
        <div class="content">
          {{ content }}
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
    @Prop() private content!: string;

  }
</script>

<style scoped lang="scss">
  $mobile-phone: "only screen and (max-width : 767px)";
  $section_height: 300px;
  $section_padding: 10px;

  $z-index: 0;
  @function next-z-index() {
    $z-index: $z-index + 1;
    @return $z-index;
  }

  .section {
    z-index: next-z-index();
    width: 50%;
    height: $section_height;
    display: inline-block;
    @media #{$mobile-phone} {
      width: 100%;
    }

    .section-padding {
      z-index: next-z-index();
      padding: $section_padding;
      text-align: center;
    }

    .section-content {
      background: #ddd;
      height: $section_height - 2*$section_padding;
      z-index: next-z-index();
      position: relative;
      border: 1px solid #888;
      border-radius: .2rem;
    }

    img {
      opacity: 0.2;
      filter: alpha(opacity=30); /* For IE8 and earlier */
      max-width: calc(100% - 10px);
      max-height: 100%;
      height: 100%;
      object-fit: contain;
    }

    .content {
      z-index: next-z-index();
      position: absolute;
      left: 10px;
      top: 10px;
      width: calc(100% - 2 * $section_padding);
      height: calc(100% - 2 * $section_padding);
      color: black;
    }
  }

</style>
