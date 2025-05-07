<template>
  <div class="toast">
    <div :class="[`toast__content`, `toast__content--${status}`]">
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

.toast__content--error {
  color: #dc2626;
  background: #fef2f2;
}
.toast__content__badge--error {
  color: #991b1b;
}

.toast__content--success {
  background: #f0fdf4;
  color: #15803d;
}

.toast__content--warning {
  color: #b45309;
  background: #fffbeb;
}

.toast__content--info {
  color: #525252;
  background: #f9fafb;
}
</style>
