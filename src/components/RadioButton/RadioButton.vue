<template>
  <div :class="[`radio`, { selected: selected }, { disabled: disabled }]">
    <input type="radio" :id="inputId" :checked="selected" />
    <label :class="[`radio__label`, `size-${size}`]" :for="inputId">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { type TSize } from '@custom-types/types';

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
  padding: 8px 12px;
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
</style>
