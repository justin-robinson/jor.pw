import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';

@Module
export default class Device extends VuexModule {
  public static readonly DESKTOP = 1024;
  public static readonly TABLET = 600;
  public static readonly MOBILE = 0;

  private static getDeviceTypeFromWidth(width: number) {
    if ( width >= this.DESKTOP) {
      return this.DESKTOP;
    }
    if (width >= this.TABLET) {
      return this.TABLET;
    }
    return this.MOBILE;
  }

  private type: number = -1;

  @Mutation
  private setType(type: number) {
    this.type = type;
  }

  @Action({commit: 'setType' })
  private fetchDeviceType() {
    return Device.getDeviceTypeFromWidth(window.innerWidth);
  }


}
