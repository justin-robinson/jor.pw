<template>
  <div class="card-section">
    <h2 class="header-wrapper">
      <span class="header">{{ name }}</span>
    </h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class SectionHeader extends Vue {
    @Prop() private name!: string;
  }
</script>

<style scoped lang="scss">
  @import "../scss/global";
  $side-margin: 10px;
  $margin: 20px;
  $margin-mobile: 10px;
  $card-background-color: #ddd;
  $card-header-background-color: #333;

  $height: 2.5em;
  $height-mobile: 2em;

  .header-wrapper {
    width: 100%;
    background: $card-header-background-color;
    position: sticky;
    z-index: z(grid, card-section-header);
    top: 0;
    margin: 0;
    height: $height;

    @media #{$phone} {
      height: $height-mobile;
    }
  }

  .header {
    width: 100%;
    color: $card-background-color;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: $height/2;
    transform: translateY(-50%);
    @media #{$phone} {
      top: $height-mobile/2;
    }
  }


</style>
