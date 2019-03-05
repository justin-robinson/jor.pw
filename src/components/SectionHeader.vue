<template>
  <div class="card-section">
    <h2 class="header-wrapper sticky">
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

  .card-section {
    --height: 2.5em;
    --height-mobile: 2em;
  }

  .header-wrapper {
    width: 100%;
    background: #333;
    z-index: z(grid, card-section-header);
    margin: 0;
    height: var(--height);

    @media #{$phone} {
      height: var(--height-mobile);
    }
  }

  .header {
    width: 100%;
    color: #ddd;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(var(--height)/2);
    transform: translateY(-50%);
    @media #{$phone} {
      top: calc(var(--height-mobile)/2);
    }
  }


</style>
