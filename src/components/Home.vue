<template>
  <div id="home">
    <ContentSquare v-for="square in squares"
                   :content="square.content"
                   :backgroundImageUrl="square.backgroundImageUrl"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ContentSquare from './ContentSquare.vue';

  @Component({
    components: {
      ContentSquare,
    },
    data: () => {
      return {
        squares: [
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
          {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\ industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\ scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\ Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            backgroundImageUrl: 'http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png',
          },
        ],
      };
    },
  })

  export default class Home extends Vue {
  }
</script>
