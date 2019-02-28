<template>
  <div id="home">
    <CardSection :name="resume.jobs.sectionName">
      <Card v-for="job in resume.jobs.data" :key="job.imageName">
        <Entry
                :company="job.company"
                :detailsHTML="job.detailsHTML"
                :imageName="job.imageName"
                :location="job.location"
                :tenure="job.tenure"
                :title="job.title"
        />
      </Card>
    </CardSection>
    <CardSection :name="resume.awards.sectionName">
      <Card v-for="job in resume.awards.data" :key="job.imageName">
        <Entry
                :company="job.company"
                :detailsHTML="job.detailsHTML"
                :imageName="job.imageName"
                :location="job.location"
                :tenure="job.tenure"
                :title="job.title"
        />
      </Card>
    </CardSection>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Card from '@/components/Card.vue';
  import Entry from '@/components/resume/Entry.vue';
  import CardSection from "@/components/CardSection.vue";

  @Component({
    components: {
      CardSection,
      Card, Entry,
    },
  })
  export default class Home extends Vue {

    private resume = {
      jobs: {},
      awards: [],
    };

    private mounted() {
      fetch('/api/resume.json')
        .then((response) => response.json())
        .then((resume) => this.resume = resume);
    }
  }
</script>