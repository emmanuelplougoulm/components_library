<template>
  <button
    :class="[
      `button`,
      `button--${variant}`,
      `button--${size}`,
      { ['button--disabled']: disabled },
      { ['button--icon--only']: $slots.iconOnly }
    ]"
    :disabled="disabled"
    @click="onClick"
    role="button"
  >
    <div v-if="$slots.iconLeft" :class="[`button__icon ,button__icon--${size}`]">
      <slot name="iconLeft"></slot>
    </div>
    <div v-if="label">
      {{ label }}
    </div>
    <div v-if="$slots.iconRight" :class="[`button__icon ,button__icon--${size}`]">
      <slot name="iconRight"></slot>
    </div>

    <div v-if="$slots.iconOnly" :class="[`button__icon ,button__icon--${size}`]">
      <slot name="iconOnly"></slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { type TSize, type TVariant } from '@custom-types/types';

type TButtonProps = {
  label?: string;
  size: TSize;
  variant: TVariant;
  disabled?: boolean;
  onClick?: () => void;
};

defineProps<TButtonProps>();
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

.button--primary {
  background-color: var(--color-primary-bg);
  color: var(--color-primary-text);
}

.button--primary:hover {
  background-color: var(--color-primary-hover-bg);
}

.button--primary:focus {
  background-color: var(--color-primary-focus-bg);
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button--primary.button--disabled {
  background-color: #f5f5f5;
  color: #a3a3a3;
}

/* SECONDARY */

.button--secondary {
  border: 0.5px solid #e5e5e5;
  background-color: var(--color-secondary-bg);
  color: var(--color-secondary-text);
  box-shadow:
    0px 1px 2px 0 rgb(0 0 0 / 0.06),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);
}

.button--secondary:hover {
  background-color: var(--color-secondary-hover-bg);
  border-width: 1px;
}

.button--secondary:focus {
  background-color: var(--color-secondary-hover-bg);
  border-width: 1px;
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button--secondary.button--disabled {
  background-color: #f5f5f5;
  color: #a3a3a3;
}

/* TERTIARY */

.button--tertiary {
  background-color: var(--color-tertiary-bg);
  color: #4338ca;
}
.button--tertiary:hover {
  background-color: var(--color-tertiary-hover-bg);
  color: var(--color-tertiary-text);
}

.button--tertiary:focus {
  background-color: var(--color-tertiary-focus-bg);
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button_tertiary.button--disabled {
  background-color: #f5f5f5;
  color: #a3a3a3;
}

/* LINK COLOR */
.button--link-color {
  background-color: none;
  color: #4338ca;
}

.button--link-color {
  background-color: var(--color-link-color-bg);
  color: var(--color-link-color-text);
}

.button--link-color:hover {
  color: var(--color-link-color-hover-text);
}

.button--link-color:focus {
  color: var(--color-link-color-focus-text);
  background-color: #ffffff;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button_link-color.button--disabled,
.button_link-gray.button--disabled {
  color: #a3a3a3;
}

.button_link-color.button--md,
.button_link-color.button--lg,
.button_link-color.button--xl,
.button_link-color.button--xxl {
  padding: 0;
}

/* LINK GRAY */

.button--link-gray {
  background-color: var(--color-link-gray-bg);
  color: var(--color-link-gray-text);
}

.button--link-gray:hover {
  color: var(--color-link-gray-hover-text);
}

.button--link-gray:focus {
  color: var(--color-link-gray-focus-text);
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}

.button--link-gray.button--md,
.button--link-gray.button--lg,
.button--link-gray.button--xl,
.button--link-gray.button--xxl {
  padding: 0;
}

/* DESTRUCTIVE */

.button--destructive {
  background-color: var(--color-destructive-bg);
  color: var(--color-destructive-text);
}

.button--destructive:hover {
  background-color: var(--color-destructive-hover-bg);
}

.button--destructive:focus {
  background-color: var(--color-destructive-focus-bg);
  box-shadow:
    0px 0px 0px 4px rgb(0.8509804010391235 0.1764705926179886 0.125490203499794 / 0.12),
    0px 0px 0px 1px rgb(0.8509804010391235 0.1764705926179886 0.125490203499794 / 1);
}

/* SIZES */

.button--md {
  gap: 4px;
  padding: 10px 14px;
  font-size: 14px;
  line-height: 20px;
}

.button--lg {
  gap: 6px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 24px;
}

.button--xl {
  gap: 6px;
  padding: 12px 20px;
  font-size: 16px;
  line-height: 24px;
}

.button--xxl {
  gap: 10px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}

.button--xxl {
  gap: 10px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}

/*ICON*/
.button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button--icon--only.button--md {
  padding: 10px;
}

.button--icon--only.button--lg {
  padding: 12px;
}

.button--icon--only.button--xl {
  padding: 14px;
}

.button--icon--only.button--xxl {
  padding: 16px;
}

.button__icon--md,
.button__icon--lg,
.button__icon--xl {
  width: 15.850911140441895px;
  height: 15.075139045715332px;
}

.button__icon--xxl {
  width: 19.02109146118164px;
  height: 18.090166091918945px;
}

.button__icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
