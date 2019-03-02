import {Module, MutationAction, VuexModule} from 'vuex-module-decorators';
import Link from '@/components/api/model/nav/Link';

@Module
export default class Nav extends VuexModule {
  public fullName: string = '';
  public headshotImageName: string = '';
  public links: Link[] = [];

  @MutationAction({mutate: ['fullName', 'headshotImageName', 'links']})
  public async fetchNav() {
    const response: Response = await fetch('/api/nav.json');
    return await response.json();
  }
}
