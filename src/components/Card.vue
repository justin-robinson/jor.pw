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

  #card {
    position: relative;
    background: #fff;
    margin: 0 0 20px 0;
    padding: 10px;

    @media #{$phone} {
      margin: 0 0 10px 0;
    }
  }

</style>
