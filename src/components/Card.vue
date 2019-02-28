<template>
  <div class="section">
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
  @import "../scss/global.scss";
  $margin: 20px;
  $padding: $margin;

  .section {
    position: relative;
    background: #ddd;
    margin: $margin;
    padding: $padding;
    border-radius: 4px;
    -webkit-box-shadow: 2px 2px 14px 3px #999;
    -moz-box-shadow: 2px 2px 14px 3px #999;
    box-shadow: 2px 2px 14px 3px #999;
  }

</style>
