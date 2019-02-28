<template>
  <div id="home">
    <Card v-for="job in resume.jobs" :key="job.imageName">
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

    private resume = {
      jobs: [],
    };

    private mounted() {
      fetch('/api/resume.json')
        .then((response) => response.json())
        .then((resume) => this.resume = resume);
    }
  }
</script>