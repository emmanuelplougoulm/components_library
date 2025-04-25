<template>
  <label :class="[`switch`, `switch--size-${size}`]" :for="uniqueId">
    <input
      class="switch__input"
      type="checkbox"
      :id="uniqueId"
      :checked="checked"
      :disabled="disabled"
      v-model="checked"
    />
    <span :class="[`switch__slider`, { checked: checked }]"></span>
  </label>
</template>

<script lang="ts" setup>
type TToggleProps = {
  size: string;
};

const uniqueId = `input-${Math.random().toString(36)}`;

const disabled = defineModel<boolean>('disabled');
const checked = defineModel<boolean>('checked');

const { size } = defineProps<TToggleProps>();
</script>

<style>
/* VARIABLES */
:root {
  --color-checked: #4338ca;
  --color-checked-focus: #4f46e5;
  --color-checked-hover: #3730a3;

  --color-background: #e5e7eb;

  --color-border-focus: #9ca3af;
  --color-disabled: #f3f4f6;
}

/* BASE STYLES */

* {
  box-sizing: border-box;
  margin: 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 1.25rem;
}

.switch__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  background: var(--color-background);
  border: 0.0625rem solid var(--color-background);
  border-radius: 624.9375rem;
}

.switch__slider:before {
  position: absolute;
  content: '';
  background: #ffffff;
  box-shadow:
    0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1),
    0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.06);
  border-radius: 624.9375rem;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

/* CHECKED */

.switch__slider.checked {
  background-color: var(--color-checked);
  border: 0.0625rem solid var(--color-checked);
}

/* FOCUS */
input:focus + .switch__slider {
  outline: none;
  border: 0.0625rem solid var(--color-border-focus);
  box-shadow: 0rem 0rem 0rem 0.25rem rgba(157, 164, 174, 0.2);
}

input:checked:focus + .switch__slider {
  border: 0.0625rem solid var(--color-checked-focus);
  box-shadow: 0rem 0rem 0rem 0.25rem rgba(68, 76, 231, 0.12);
}

/* NOT DISABLED */
input:not(:disabled):hover + .switch__slider,
input:not(:disabled):focus + .switch__slider {
  background: #d1d5db;
}
input:checked:not(:disabled):hover + .switch__slider,
input:checked:not(:disabled):focus + .switch__slider {
  background: var(--color-checked-hover);
}

/* DISABLED */
input:disabled + .switch__slider {
  background: var(--color-disabled);
  border: 0.0625rem solid var(--color-disabled);
  pointer-events: none;
}

input:disabled + .switch__slider:before {
  background: #d1d5db;
}

/* SIZE SM */
.switch--size-sm {
  width: 2.25rem;
  height: 1.25rem;
}

.switch--size-sm .switch__slider:before {
  left: 0.0625rem;
  bottom: 0.0625rem;
  width: 1rem;
  height: 1rem;
}

.switch--size-sm input:checked + .switch__slider:before {
  -webkit-transform: translateX(1rem);
  -ms-transform: translateX(1rem);
  transform: translateX(1rem);
}

/* SIZE MD */

.switch--size-md {
  width: 2.75rem;
  height: 1.5rem;
}

.switch--size-md .switch__slider:before {
  left: 0.0625rem;
  bottom: 0.0625rem;
  width: 1.25rem;
  height: 1.25rem;
}
.switch--size-md input:checked + .switch__slider:before {
  -webkit-transform: translateX(1.25rem);
  -ms-transform: translateX(1.25rem);
  transform: translateX(1.25rem);
}
</style>
