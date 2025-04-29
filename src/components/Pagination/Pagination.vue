<template>
  <div class="pagination-container">
    <PageItem v-for="page in pages" :key="page" @click="changePage(page)" :text="page" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import PageItem from './PageItem.vue';

type TPaginationProps<T> = {
  items: Array<T>;
  itemsPerPage: number;
};

const { items, itemsPerPage } = defineProps<TPaginationProps<{}>>();

const currentPage = ref(1);
const pageCount = computed(() => Math.ceil(items.length / itemsPerPage));
const pages = computed(() => Array.from({ length: pageCount.value }, (_, i) => i + 1));

const changePage = (pageNumber) => {
  currentPage.value = pageNumber;
};
</script>

<style>
:root {
  --color-background: #0a0a0a;
}

/* BASE STYLES */

* {
  box-sizing: border-box;
  margin: 0;
}

.pagination-container {
  display: flex;
  gap: 8px;
}
</style>
