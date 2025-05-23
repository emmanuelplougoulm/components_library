<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import Badge from '@components/Badge/Badge.vue';
import BaseIcon from '@components/BaseIcon/BaseIcon.vue';

type BadgeStatus = 'neutral' | 'success' | 'error' | 'warning' | 'brand';

const props = defineProps({
  badgeStatus: {
    type: String as PropType<BadgeStatus>,
    required: true
  },
  badgeLabel: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  btnLabel: {
    type: String,
    default: 'button'
  },
  btnFn: Function
});

defineOptions({
  name: 'BlogCard'
});
</script>

<template>
  <div class="blog_card" role="article" :aria-labelledby="'blog-card-title-' + title">
    <img
      :src="image"
      class="blog_card_image"
      :alt="title ? `Image for ${title}` : 'Blog image'"
    />

    <div class="blog_card_content">
      <header class="blog_card_header">
        <Badge :color="badgeStatus" :label="badgeLabel" size="md" />
        <h2 :id="'blog_card_title-' + title" class="blog_card_title">
          {{ title }}
        </h2>
      </header>

      <div class="blog_card_text">
        <p class="blog_card_excerpt">
          {{ excerpt }}
        </p>

        <button
          :aria-label="`Perform action: ${btnLabel}`"
          class="blog_card_button"
          @click="props.btnFn?.()"
        >
          {{ btnLabel }}
          <BaseIcon iconName="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
p {
  margin: 0;
}

button,
header {
  all: unset;
}

.blog_card {
  font-family:
    'Noto Sans',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  box-sizing: border-box;
  width: 21.25rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow:
    0rem 0.0625rem 0.125rem 0 rgb(0 0 0 / 0.06),
    0rem 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1);
  overflow: hidden;
}

.blog_card_image {
  object-fit: cover;
  -moz-object-fit: cover;
  -webkit-object-fit: cover;
  height: 18rem;
}

.blog_card_content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  -moz-gap: 12px;
  padding: 24px 16px;
}

.blog_card_header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  -moz-gap: 8px;
  align-self: stretch;
}

.blog_card_text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: stretch;
}

.blog_card_title {
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #171717;
  text-transform: capitalize;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog_card_excerpt {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #525252;

  -webkit-font-smoothing: antialiased;
}

.blog_card_button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  -moz-gap: 0.375rem;

  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #4338ca;
  fill: #4338ca;

  text-transform: capitalize;

  width: fit-content;
  cursor: pointer;

  -webkit-width: fit-content;
  -webkit-tap-highlight-color: transparent;
}
</style>
