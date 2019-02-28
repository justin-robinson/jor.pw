<template>
  <div id="home">
    <Card v-for="job in resume.jobs" :key="job.imageName">
      <Entry
           :company="job.company"
           :detailsHTML="job.detailsHTML"
           :imageName="job.imageName"
           :location="job.location"
           :tenure="job.tenure"
           :title="job.title"
      />
    </Card>
    <Card v-for="job in resume.awards" :key="job.imageName">
      <Entry
              :company="job.company"
              :detailsHTML="job.detailsHTML"
              :imageName="job.imageName"
              :location="job.location"
              :tenure="job.tenure"
              :title="job.title"
      />
    </Card>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Card from '@/components/Card.vue';
  import Entry from '@/components/resume/Entry.vue';

  @Component({
    components: {
      Card, Entry,
    },
  })
  export default class Home extends Vue {

    private resume = {
      jobs: [],
      awards: [],
    };

    private mounted() {
      fetch('/api/resume.json')
        .then((response) => response.json())
        .then((resume) => this.resume = resume);
    }
  }
</script>