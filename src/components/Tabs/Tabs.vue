<template>
  <div class="tabs">
    <ul class="tabs__header" role="tablist">
      <li v-for="(tab, index) in tabs" :key="tab.title" role="tab-item">
        <button
          @click="setActiveTab(index)"
          :class="[`tab`, { active: index === activeIndex }]"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tabs__content">
      <div v-show="index === activeIndex" v-for="(tab, index) in tabs">
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
.tabs__header {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 4px;
}

.tabs__header .tab {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
  background-color: var(--color-background);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text);
}
/* ACTIVE */
.tabs__header .tab.active {
  border: 0.5px solid var(--color-border);
  box-shadow:
    0px 1px 2px -1px rgb(0 0 0 / 0.1),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);
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
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}
</style>
