<template>
  <button
    class="button"
    :class="[
      `button_${variant}`,
      `button_${size}`,
      { disabled: disabled },
      { button_icon_only: $slots.iconOnly }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <div v-if="$slots.iconLeft" class="button_icon" :class="[`button_icon_${size}`]">
      <slot name="iconLeft"></slot>
    </div>
    <div v-if="label">
      {{ label }}
    </div>
    <div v-if="$slots.iconRight" class="button_icon" :class="[`button_icon_${size}`]">
      <slot name="iconRight"></slot>
    </div>

    <div v-if="$slots.iconOnly" class="button_icon" :class="[`button_icon_${size}`]">
      <slot name="iconOnly"></slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  label?: string;
  size?: 'md' | 'lg' | 'xl' | 'xxl';
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link-color'
    | 'link-gray'
    | 'destructive';
  disabled?: boolean;
}>();

defineEmits(['click']);
</script>

<style>
button {
  all: unset;
}

/* COMMON STYLES */
.button {
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  text-wrap: nowrap;
  text-transform: capitalize;
  font-weight: var(--font-weight, 500);
}

/* PRIMARY */

.button_primary {
  background-color: var(--color-primary-bg);
  color: var(--color-primary-text);
}

.button_primary:hover {
  background-color: var(--color-primary-hover-bg);
}

.button_primary:focus {
  background-color: var(--color-primary-focus-bg);
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button_primary.disabled {
  background-color: #f5f5f5;
  color: #a3a3a3;
}

/* SECONDARY */

.button_secondary {
  border: 0.5px solid #e5e5e5;
  background-color: var(--color-secondary-bg);
  color: var(--color-secondary-text);
  box-shadow:
    0px 1px 2px 0 rgb(0 0 0 / 0.06),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);
}

.button_secondary:hover {
  background-color: var(--color-secondary-hover-bg);
  border-width: 1px;
}

.button_secondary:focus {
  background-color: var(--color-secondary-hover-bg);
  border-width: 1px;
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button_secondary.disabled {
  background-color: #f5f5f5;
  color: #a3a3a3;
}

/* TERTIARY */

.button_tertiary {
  background-color: var(--color-tertiary-bg);
  color: #4338ca;
}
.button_tertiary:hover {
  background-color: var(--color-tertiary-hover-bg);
  color: var(--color-tertiary-text);
}

.button_tertiary:focus {
  background-color: var(--color-tertiary-focus-bg);
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

/* LINK COLOR */

.button_link-color {
  background-color: none;
  color: #4338ca;
}

.button_link-color.button_md,
.button_link-color.button_lg,
.button_link-color.button_xl,
.button_link-color.button_xxl {
  padding: 0;
}

/* LINK GRAY */

.button_link-gray {
  background-color: none;
  color: #525252;
}
.button_link-gray.button_md,
.button_link-gray.button_lg,
.button_link-gray.button_xl,
.button_link-gray.button_xxl {
  padding: 0;
}

/* DESTRUCTIVE */

.button_destructive {
  background-color: var(--color-destructive-bg);
  color: var(--color-destructive-text);
}

.button_destructive:hover {
  background-color: var(--color-destructive-hover-bg);
}

.button_destructive:focus {
  background-color: var(--color-destructive-focus-bg);
  box-shadow:
    0px 0px 0px 4px rgb(0.8509804010391235 0.1764705926179886 0.125490203499794 / 0.12),
    0px 0px 0px 1px rgb(0.8509804010391235 0.1764705926179886 0.125490203499794 / 1);
}

/* SIZES */

.button_md {
  gap: 4px;
  padding: 10px 14px;
  font-size: 14px;
  line-height: 20px;
}

.button_lg {
  gap: 6px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 24px;
}

.button_xl {
  gap: 6px;
  padding: 12px 20px;
  font-size: 16px;
  line-height: 24px;
}

.button_xxl {
  gap: 10px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}

.button_xxl {
  gap: 10px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}

.button_icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_icon_only.button_md {
  padding: 10px;
}

.button_icon_only.button_lg {
  padding: 12px;
}

.button_icon_only.button_xl {
  padding: 14px;
}

.button_icon_only.button_xxl {
  padding: 16px;
}

.button_icon_md,
.button_icon_lg,
.button_icon_xl {
  width: 15.850911140441895px;
  height: 15.075139045715332px;
}

.button_icon_xxl {
  width: 19.02109146118164px;
  height: 18.090166091918945px;
}

.button_icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
