<template>
  <div :class="[`pagination`, { [`pagination__disabled`]: disabled }]">
    <div v-if="$slots.iconLeft" :class="[`pagination__icon`]">
      <slot name="iconLeft"></slot>
    </div>
    <div v-if="!$slots.iconOnly" :class="[`pagination__text`]">{{ text }}</div>
    <div v-if="$slots.iconRight" :class="[`pagination__icon`]">
      <slot name="iconRight"></slot>
    </div>
    <div v-if="$slots.iconOnly" :class="[`pagination__icon`]">
      <slot name="iconOnly"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '../../styles/variables.css';

type TPaginationProps = {
  text: string | number;
  disabled?: boolean;
};

defineProps<TPaginationProps>();
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  cursor: pointer;
}

.pagination__text {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #525252;
  text-transform: capitalize;
}

/* HOVER */

.pagination:hover {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px -1px rgb(0 0 0 / 0.1),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);
}

/* FOCUS */

.pagination:focus {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.pagination.pagination__disabled {
  pointer-events: none;
}

.pagination.disabled .pagination__text {
  color: #a3a3a3;
}

/* ICON SIZES */
.pagination__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  color: #525252;
  fill: #525252;
}
</style>
