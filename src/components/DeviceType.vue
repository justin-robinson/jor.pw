<template></template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class DeviceType extends Vue {

    private commitDeviceType() {
      this.$store.dispatch('fetchDeviceType');
    }

    private beforeMount() {
      window.addEventListener('resize', this.commitDeviceType);
    }

    private mounted() {
      this.commitDeviceType();
    }
  }
</script>