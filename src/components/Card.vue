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
  $background-color: #fff;
  $bottom-margin: 20px;
  $bottom-margin-mobile: 10px;
  $padding: 20px;

  #card {
    position: relative;
    background: $background-color;
    margin: 0 0 $bottom-margin 0;
    padding: $padding;

    @media #{$phone} {
      margin: 0 0 $bottom-margin-mobile 0;
    }
  }

</style>
