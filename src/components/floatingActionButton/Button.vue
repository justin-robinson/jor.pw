<template>
  <div class="fab">
    <ul class="buttons">
      <li class="button primary">
        <img class="icon" alt="icon" :src="iconImageUrl('user.svg')">
      </li>
      <li class="secondary container">
        <ul class="buttons secondary">
          <li class="button secondary"
              v-for="button in secondaryButtons"
              :key="button.icon">
            <a class="link" :href="button.href" target="_blank">
              <img class="icon secondary" :alt="button.icon" :src="iconImageUrl(button.icon)">
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Link from '@/components/api/model/nav/Link';

  @Component
  export default class Button extends Vue {

    @Prop() private secondaryButtons!: Link[];

    private iconImageUrl(imageName: string) {
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        return '';
      }
    }

  }

  export {Button};
</script>

<style scoped lang="scss">
  $secondary-button-padding: 4px;

  .fab {
    position: fixed;
    right: 24px;
    bottom: 45px;
    height: auto;
    z-index: z(fab);

    .buttons {
      display: flex;
      flex-direction: column-reverse;
      list-style: none;

      &, &.secondary {
        padding: 0;
      }
    }

    @mixin show-icon() {
      opacity: 1;
      margin: auto;
      height: 100%;
      width: calc(var(--size) * 0.65);
    }

    @mixin show-secondary() {
      --size: 3rem;
      opacity: 1;

      & .icon {
        @include show-icon();
      }
    }

    @mixin transition () {
      transition: opacity 0.3s, width 0.6s, height 0.6s;
    }

    .button {
      --size: 4rem;
      width: var(--size);
      cursor: pointer;
      height: var(--size);
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      -webkit-tap-highlight-color: transparent;

      & .icon {
        @include show-icon();
        @include transition();

        &.secondary {
          opacity: 0;
          width: 0;
          height: 0;
        }
      }

      &.primary {
        background: var(--color-primary);

        &:hover {
          & + .container .button {
            @include show-secondary();
          }
        }
      }

      &.secondary {
        --size: 0;
        background: #333;
        opacity: 0;
        margin: $secondary-button-padding auto;
        @include transition();
      }
    }

    .secondary.container {
      padding: $secondary-button-padding*2 0;

      &:hover .button {
        @include show-secondary();
      }
    }
  }

</style>