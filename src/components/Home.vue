<template>
  <div id="home">
    <Card v-for="job in jobs" :key="job.imageName">
      <Job
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
  import Job from '@/components/resume/Job.vue';

  @Component({
    components: {
      Card, Job,
    },
  })
  export default class Home extends Vue {

    private jobs = [];

    private mounted() {
      fetch('/api/jobs.json')
        .then((response) => response.json())
        .then((jobs) => this.jobs = jobs);
    }
  }
</script>