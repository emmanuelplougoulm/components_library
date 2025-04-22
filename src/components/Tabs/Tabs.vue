<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li v-for="(tab, index) in tabs" :key="tab.title">
        {{ tab.title }}
      </li>
    </ul>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const activeIndex = ref(0);

type TTabsProps = {
  tabs: Array<{ title: string }>;
};

defineProps<TTabsProps>();
</script>

<style>
* {
  box-sizing: border-box;
}

ul,
li {
  margin: 0;
  padding: 0;
}

/* BASE STYLES*/
.tabs__header {
  display: flex;
  justify-content: flex-start;

  gap: 8px;
  /* padding: 10px 16px; */
  border-radius: 4px;
  border: 1px blue solid;
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
}
/* ACTIVE */

/* HOVER */

/* FOCUS */

/* DISABLED*/
</style>
