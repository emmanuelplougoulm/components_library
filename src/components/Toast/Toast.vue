<template>
  <div class="toast" id="toast">
    <div class="toast__content">
      <div class="toast__content__badge"></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type TToastProps = {};

const uniqueId = `input-${Math.random().toString(36)}`;
defineProps<TToastProps>();
</script>

<style>
/* VARIABLES */
:root {
}

/* BASE STYLES */

* {
}
</style>
