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
import '../../styles/variables.css';
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
  --color-border: #d4d4d4;
  --color-background: #ffffff;
  --color-background-hover: #fafafa;
  --color-text: #525252;
  --color-text-hover: #171717;
  --color-text-active: #4338ca;
  --color-text-active-hover: #3730a3;
  --color-text-content: #000000;
}

* {
  box-sizing: border-box;
  font-family: var(--font-family);
}

button {
  all: unset;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-grow: 1;
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
}

.tabs__content {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000000;
}

.tabs__header .tab {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.375rem;
  padding: 0.625rem 1rem;
  height: 36px;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  text-transform: capitalize;
  background-color: var(--color-background);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-text);
}

/* DEFAULT + HOVER  */
.tabs__header .tab:hover {
  color: var(--color-text-hover);
}

/* ACTIVE */
.tabs__header .tab.active {
  color: var(--color-text-active);
  border-bottom: 1px var(--color-text-active) solid;
}

/* ACTIVE + HOVER */
.tabs__header .tab.active:hover {
  color: var(--color-text-active-hover);
  border-bottom: 1px var(--color-text-active-hover) solid;
}
</style>
