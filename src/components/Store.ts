import Vue from 'vue';
import Vuex from 'vuex';
import Device from '@/components/store/Device';
import Nav from '@/components/store/Nav';
import Resume from '@/components/store/Resume';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    device: Device,
    resume: Resume,
    nav: Nav,
  },
});
