import {Module, Mutation, VuexModule} from 'vuex-module-decorators';

@Module
export default class Store extends VuexModule {
  private deviceTypeValue = -1;

  @Mutation
  private setDeviceType(newDeviceType: number) {
    this.deviceTypeValue = newDeviceType;
  }

  get deviceType() {
    return this.deviceTypeValue;
  }
}
