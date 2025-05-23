<template>
  <span
    role="status"
    :aria-label="label"
    :class="['badge', `badge--color-${color}`, `badge--size-${size}`]"
  >
    {{ label }}
  </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import '../../styles/variables.css';

defineProps({
  color: {
    type: String as () => 'neutral' | 'success' | 'error' | 'warning' | 'brand',
    default: 'neutral'
  },
  label: {
    type: String,
    default: 'label'
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md'
  }
});
</script>

<style scoped>
.badge {
  box-sizing: border-box;
  font-family: var(--font-family);
  display: inline-block;
  font-weight: 400;
  text-align: center;
  align-content: center;
  border-radius: 624.9375rem;
  border-width: 1px;
  border-style: solid;
  width: fit-content;

  /* Cross platform rules */
  -webkit-border-radius: 624.9375rem;
  -moz-border-radius: 624.9375rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.badge--size-sm {
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  line-height: 1rem;
}
.badge--size-md {
  font-size: 0.875rem;
  padding: 0.125rem 0.5rem;
  line-height: 1.25rem;
}
.badge--size-lg {
  font-size: 1.25rem;
  padding: 0.25rem 0.625rem;
  line-height: 1.25rem;
}

.badge--color-neutral {
  background-color: #f9fafb;
  color: #525252;
  border-color: #e6e6e6;
}
.badge--color-error {
  background-color: #fef2f2;
  color: #dc2626;
  border-color: #fecaca;
}
.badge--color-warning {
  background-color: #fffbeb;
  color: #b45309;
  border-color: #fde68a;
}
.badge--color-success {
  background-color: #f0fdf4;
  color: #15803d;
  border-color: #bbf7d0;
}
.badge--color-brand {
  background-color: #eef2ff;
  color: #4338ca;
  border-color: #c7d2fe;
}
</style>
