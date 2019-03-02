<template>
  <div id="card-section">
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
  $card-background-color: #ddd;
  $card-header-background-color: #333;

  .header {
    background: $card-header-background-color;
    color: $card-background-color;
    border-radius: 4px;
    -webkit-box-shadow: 2px 2px 14px 3px #999;
    -moz-box-shadow: 2px 2px 14px 3px #999;
    box-shadow: 2px 2px 14px 3px #999;
    font-size: 1.5em;
    margin: $margin $side-margin;
  }

</style>
