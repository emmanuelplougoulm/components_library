<template>
  <div @click="handleClick" :class="[`checkbox`]">
    <span :id="uniqueId" v-if="!checked" class="checkbox__checkmark--blank"></span>
    <BaseIcon
      :id="uniqueId"
      v-if="checked"
      icon-name="checkbox-checked"
      class="checkbox__icon--checked"
    />
    <label :class="[`checkbox__label`]" :for="uniqueId">{{ text }} </label>
  </div>
</template>

<script lang="ts" setup>
import '../../styles/variables.css';
import BaseIcon from '@components/BaseIcon/BaseIcon.vue';
import { ref } from 'vue';

type TCheckboxProps = {
  text?: string;
};

const checked = ref(false);

const handleClick = () => {
  checked.value = !checked.value;
};

const uniqueId = `input-${Math.random().toString(36)}`;
const { text } = defineProps<TCheckboxProps>();
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
input[type='checkbox'] {
  display: none;
  position: absolute;
}

* {
  box-sizing: border-box;
  margin: 0;
}

.checkbox {
  font-family: var(--font-family);
  display: flex;
  align-items: center;
  gap: 12px;
}

.checkbox__label {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #525252;
}

.checkbox__checkmark--blank {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px grey solid;
}

.checkbox__checkmark--blank:focus {
  box-shadow:
    0px 0px 0px 4px rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 0.12),
    0px 0px 0px 1px rgb(0.2666666805744171 0.2980392277240753 0.9058823585510254 / 1);
}

.checkbox__icon--checked {
  width: 16px;
  height: 16px;
  color: #3730a3;
}

/* CHECKED */

/* FOCUS */

/* NOT DISABLED */

/* DISABLED */
</style>
