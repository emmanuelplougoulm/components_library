<template>
  <div :class="[`radio`, `size-${size}`, { selected: selected }, { disabled: disabled }]">
    <div v-if="$slots.iconLeft" :class="[`icon`, `size-${size}`]">
      <slot name="iconLeft"></slot>
    </div>
    <input type="radio" :id="inputId" :checked="selected" />
    <label
      v-if="!$slots.iconOnly"
      :class="[`radio__label`, `size-${size}`]"
      :for="inputId"
      >{{ label }}</label
    >
    <div v-if="$slots.iconRight" :class="[`icon`, `size-${size}`]">
      <slot name="iconRight"></slot>
    </div>
    <div v-if="$slots.iconOnly" :class="[`icon`, `size-${size}`]">
      <slot name="iconOnly"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const inputId = `input-${Math.random().toString(36)}`;

type TButtonProps = {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  label: string;
  selected: boolean;
  disabled: boolean;
};

defineProps<TButtonProps>();
</script>

<style>
/* BASE STYLE */
.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #ffffff;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  text-transform: capitalize;
}

/* HOVER */
.radio:hover {
  background-color: #fafafa;
}

/* FOCUS */
.radio:focus {
  background-color: #fafafa;
  box-shadow: 0px 0px 0px 4px
    rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12);
}
/* SELECTED */
.radio.selected {
  border-color: #4f46e5;
}

/* DISABLED */
.radio.disabled {
  border: none;
  pointer-events: none;
  background-color: #f5f5f5;
}

/* FONT SIZES */
.radio__label.size-sm {
  font-size: 14px;
  line-height: 20px;
}
.radio__label.size-md,
.radio__label.size-lg {
  font-size: 16px;
  line-height: 24px;
}

.radio__label.size-xl,
.radio__label.size-xxl {
  font-size: 18px;
  line-height: 28px;
}

/* RADIO CONTAINER SIZES */
.radio.size-sm {
  padding: 8px 12px;
}
.radio.size-md {
  padding: 10px 16px;
}
.radio.size-lg {
  padding: 12px 20px;
}
.radio.size-xl,
.radio.size-xxl {
  padding: 16px 24px;
}

/* ICON SIZES */

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.icon.size-sm,
.icon.size-md,
.icon.size-lg {
  width: 15.850911140441895px;
  height: 15.075139045715332px;
}

.icon.size-xl,
.icon.size-xxl {
  width: 19.02109146118164px;
  height: 18.090166091918945px;
}
</style>
