<template></template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class DeviceType extends Vue {
    public static readonly DESKTOP = 1024;
    public static readonly TABLET = 600;
    public static readonly MOBILE = 0;

    public static getDeviceTypeFromWidth(width: number) {
      if ( width >= DeviceType.DESKTOP) {
        return DeviceType.DESKTOP;
      }
      if (width >= DeviceType.TABLET) {
        return DeviceType.TABLET;
      }
      return DeviceType.MOBILE;
    }

    private commitDeviceType() {
      this.$store.commit('setDeviceType', DeviceType.getDeviceTypeFromWidth(window.innerWidth));
    }

    private beforeMount() {
      window.addEventListener('resize', this.commitDeviceType);
    }

    private mounted() {
      this.commitDeviceType();
    }
  }
</script>