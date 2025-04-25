<template>
  <input type="radio" :id="inputId" name="monster" value="K" />
  <label :for="inputId">Radio button</label>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { type TSize } from '@custom-types/types';

const inputId = `input-${Math.random().toString(36)}`;

type TButtonProps = {};

defineProps<TButtonProps>();
</script>

<style>
/* HOVER */
/* FOCUS */
/* SELECTED */
/* DISABLED */
</style>
