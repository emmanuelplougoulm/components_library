<template>
  <header class="navbar-container"></header>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  // label?: string;
  // size: 'md' | 'lg' | 'xl' | 'xxl';
  // variant:
  //   | 'primary'
  //   | 'secondary'
  //   | 'tertiary'
  //   | 'link-color'
  //   | 'link-gray'
  //   | 'destructive';
  // disabled?: boolean;
  // onClick?: () => void;
}>();
</script>

<style>
header {
  /* all: unset; */
}

.navbar-container {
  height: 84px;
  background-color: aqua;
}

/* TABLET */
@media screen and (max-width: 768px) {
  .navbar-container {
    background-color: blue;
  }
}

/* MOBILE */
@media screen and (max-width: 375px) {
  .navbar-container {
    background-color: violet;
  }
}
</style>
