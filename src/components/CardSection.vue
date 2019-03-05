<template>
  <div class="card-section">
    <h2 class="header">{{ name }}</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class CardSection extends Vue {
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

  .header {
    background: $card-header-background-color;
    color: $card-background-color;
    border-radius: 4px;
    box-shadow: 2px 2px 14px 3px #999;
    font-size: 1.5em;
    margin: $margin $side-margin;
    position: sticky;
    top: 10px;
    z-index: z(grid, card-section-header);

    @media #{$phone} {
      border-radius: unset;
      margin: $margin-mobile 0;
      top: 0;
    }
  }


</style>
