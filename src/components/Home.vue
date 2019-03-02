<template>
  <div id="home">
    <template v-for="entry in $store.state.resume.entries">
      <CardSection :name="entry.sectionName" :key="entry.sortOrder">
        <Card v-for="(entryData, index) in entry.data" :key="entry.sortOrder + '.' + index">
          <Entry
                  :title="entryData.title"
                  :detailsHTML="entryData.detailsHTML"
                  :imageName="entryData.imageName"
                  :headerRightSubtitle="entryData.headerRightSubtitle"
                  :headerRightTitle="entryData.headerRightTitle"
                  :subtitle="entryData.subtitle"
          />
        </Card>
      </CardSection>
    </template>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Card from '@/components/Card.vue';
  import Entry from '@/components/resume/Entry.vue';
  import CardSection from '@/components/CardSection.vue';

  @Component({
    components: {
      CardSection,
      Card, Entry,
    },
  })
  export default class Home extends Vue {
    private beforeMount() {
      this.$store.dispatch('fetchResume');
    }
  }
</script>