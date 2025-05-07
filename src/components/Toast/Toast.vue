<template>
  <div class="toast" id="toast">
    <div class="toast__content">
      <div class="toast__content__badge">{{ status }}</div>
      <div>{{ label }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type TToastProps = {
  status: string;
  label: string;
};

const uniqueId = `input-${Math.random().toString(36)}`;
const { status, label } = defineProps<TToastProps>();
</script>

<style>
/* VARIABLES */
:root {
}

/* BASE STYLES */

* {
  box-sizing: border-box;
  margin: 0;
}

.toast__content {
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px 10px 4px 4px;
  gap: 12px;

  border-radius: 2000px;

  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.toast__content__badge {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 10px;

  height: 24px;

  background: #ffffff;
  box-shadow:
    0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 9999px;
}
</style>
