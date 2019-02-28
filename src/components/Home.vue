<template>
  <div id="home">
    <Card v-for="square in squares" :key="square.backgroundImageUrl">
      <Job ref="content" :backgroundImageUrl="square.backgroundImageUrl"
               :detailsHTML="square.detailsHTML"
               :title="square.title"
               :company="square.company"/>
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

    public squares = [];

    public mounted() {
      fetch('/api/squares.json')
        .then((response) => response.json())
        .then((squares) => this.squares = squares);
    }
  }
</script>