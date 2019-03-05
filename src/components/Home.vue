<template>
  <div id="home">
    <template v-for="entry in $store.state.resume.entries">
      <SectionHeader :name="entry.sectionName" :key="entry.sortOrder">
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
      </SectionHeader>
    </template>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Card from '@/components/Card.vue';
  import Entry from '@/components/resume/Entry.vue';
  import SectionHeader from '@/components/SectionHeader.vue';

  @Component({
    components: {
      SectionHeader,
      Card, Entry,
    },
  })
  export default class Home extends Vue {
    private beforeMount() {
      this.$store.dispatch('fetchResume');
    }
  }
</script>