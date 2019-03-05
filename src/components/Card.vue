<template>
  <div id="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Card extends Vue {
  }
</script>

<style scoped lang="scss">
  @import "../scss/global";
  $background-color: #eee;
  $side-margin: 20px;
  $bottom-margin-mobile: 10px;
  $padding: $side-margin;

  #card {
    position: relative;
    background: $background-color;
    margin: 0 $side-margin $side-margin $side-margin;
    padding: $padding;
    border-radius: 4px;
    box-shadow: 2px 2px 14px 3px #999, 0 0 300px -100px #999 inset;

    @media #{$phone} {
      margin: 0 0 $bottom-margin-mobile 0;
      border-radius: 0;
      box-shadow: 0 0 300px -100px #999 inset;
    }
  }

</style>
