<template>
  <div
    @click="handleSelected"
    :id="radioId"
    :class="[
      `radio`,
      `radio--size--${size}`,
      { [`radio--selected`]: selected },
      { [`radio--disabled`]: disabled }
    ]"
  >
    <div v-if="$slots.iconLeft" :class="[`radio__icon`, `radio--size--${size}`]">
      <slot name="iconLeft"></slot>
    </div>
    <label
      v-if="!$slots.iconOnly"
      :class="[`radio__label`, `radio--size--${size}`]"
      :for="radioId"
      >{{ label }}</label
    >
    <div v-if="$slots.iconRight" :class="[`radio__icon`, `radio--size--${size}`]">
      <slot name="iconRight"></slot>
    </div>
    <div v-if="$slots.iconOnly" :class="[`radio__icon`, `radio--size--${size}`]">
      <slot name="iconOnly"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const radioId = `input-${Math.random().toString(36)}`;

type TButtonProps = {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  label: string;
  disabled: boolean;
};

const { disabled } = defineProps<TButtonProps>();
const selected = defineModel<boolean>('selected');

const handleSelected = () => {
  if (!disabled) {
    selected.value = true;
  }
};
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
.radio--selected {
  border-color: #4f46e5;
}

/* DISABLED */
.radio--disabled {
  border: none;
  pointer-events: none;
  background-color: #f5f5f5;
}

/* FONT SIZES */
.radio__label.radio--size--sm {
  font-size: 14px;
  line-height: 20px;
}
.radio__label.radio--size--md,
.radio__label.radio--size--lg {
  font-size: 16px;
  line-height: 24px;
}

.radio__label.radio--size--xl,
.radio__label.radio--size--xxl {
  font-size: 18px;
  line-height: 28px;
}

/* RADIO CONTAINER SIZES */
.radio.radio--size--sm {
  padding: 8px 12px;
}
.radio.radio--size--md {
  padding: 10px 16px;
}
.radio.radio--size--lg {
  gap: 6px;
  padding: 12px 20px;
}
.radio.radio--size--xl,
.radio.radio--size--xxl {
  gap: 6px;
  padding: 16px 24px;
}

/* ICON SIZES */
.radio__icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio__icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.radio__icon.radio--size--sm,
.radio__icon.radio--size--md,
.radio__icon.radio--size--lg {
  width: 15.850911140441895px;
  height: 15.075139045715332px;
}

.radio__icon.radio--size--xl,
.radio__icon.radio--size--xxl {
  width: 19.02109146118164px;
  height: 18.090166091918945px;
}
</style>
