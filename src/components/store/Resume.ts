import {Module, MutationAction, VuexModule} from 'vuex-module-decorators';
import { Resume as ResumeModel } from '@/components/api/model/Resume';
import Entry from '@/components/api/model/resume/Entry';

@Module
export default class Resume extends VuexModule {
  public entries: Entry[] = [];

  @MutationAction({mutate: ['entries']})
  public async fetchResume() {
    const response: Response =  await fetch('/api/resume.json');
    const resume: ResumeModel = await response.json() as ResumeModel;
    resume.entries.sort((entryA, entryB) => entryA.sortOrder - entryB.sortOrder );
    return resume;
  }
}
