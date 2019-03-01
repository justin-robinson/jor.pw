<template>
  <div id="home">
    <template v-for="(entry, i) in orderedEntries">
      <CardSection :name="entry.sectionName" :key="entry.sortOrder + '.0.' + i">
        <Card v-for="(entryData, index) in entry.data" :key="entry.sortOrder + '.1.' + index">
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

    private resume = {
      entries: [
        {
          sortOrder: 0,
          sectionName: '',
        },
      ],
    };

    private mounted() {
      fetch('/api/resume.json')
        .then((response) => response.json())
        .then((resume) => this.resume = resume);
    }

    get orderedEntries() {
      this.resume.entries.sort((entryA, entryB) => entryA.sortOrder - entryB.sortOrder );
      return this.resume.entries;
    }
  }
</script>