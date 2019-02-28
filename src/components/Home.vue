<template>
  <div id="home">
    <Card v-for="job in jobs" :key="job.imageName">
      <Job ref="content" :imageName="job.imageName"
               :detailsHTML="job.detailsHTML"
               :title="job.title"
               :company="job.company"/>
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

    public jobs = [];

    public mounted() {
      fetch('/api/jobs.json')
        .then((response) => response.json())
        .then((jobs) => this.jobs = jobs);
    }
  }
</script>