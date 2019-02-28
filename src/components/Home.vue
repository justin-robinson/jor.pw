<template>
  <div id="home">
    <template v-for="entries in orderedEntries">
      <CardSection :name="entries.sectionName">
        <Card v-for="entry in entries.data" :key="entries.sortOrder">
          <Entry
                  :title="entry.title"
                  :detailsHTML="entry.detailsHTML"
                  :imageName="entry.imageName"
                  :headerRightSubtitle="entry.headerRightSubtitle"
                  :headerRightTitle="entry.headerRightTitle"
                  :subtitle="entry.subtitle"
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