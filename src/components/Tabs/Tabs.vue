<template>
  <div class="tabs">
    <ul class="tabs__header" role="tablist">
      <li v-for="(tab, index) in tabs" :key="tab.title" role="presentation">
        <button
          :id="`tab-${index}`"
          role="tab"
          :aria-selected="index === activeIndex"
          :aria-controls="`tabpanel-${index}`"
          @click="setActiveTab(index)"
          :class="[`tab`, { active: index === activeIndex }]"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tabs__content" role="tab-content-container">
      <div
        v-show="index === activeIndex"
        v-for="(tab, index) in tabs"
        :id="`tabpanel-${index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${index}`"
      >
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const activeIndex = ref(0);

const setActiveTab = (index: number): void => {
  activeIndex.value = index;
};

type TTabsProps = {
  tabs: Array<{ title: string; content: string }>;
};

defineProps<TTabsProps>();
</script>

<style>
:root {
  --color-border: #e5e5e5;
  --color-background: #ffffff;
  --color-background-hover: #fafafa;
  --color-text: #525252;
  --color-text-active: #171717;
  --color-text-content: #000000;
}

* {
  box-sizing: border-box;
}

button {
  all: unset;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* BASE STYLES*/
.tabs {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.tabs__header {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  border-radius: 0.25rem;
}

.tabs__content {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000000;
}

.tabs__header .tab {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  padding: 0.625rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  background-color: var(--color-background);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-text);
}

/* ACTIVE */
.tabs__header .tab.active {
  border: 0.0313rem solid var(--color-border);
  box-shadow:
    0rem 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1),
    0rem 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1);
  color: var(--color-text-active);
}

/* HOVER */
.tabs__header .tab:hover {
  background-color: var(--color-background-hover);
  color: var(--color-text);
}

/* FOCUS */
.tabs__header .tab:focus {
  background-color: var(--color-background-hover);
  color: var(--color-text);
  box-shadow: 0rem 0rem 0rem 0.25rem
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}
</style>
