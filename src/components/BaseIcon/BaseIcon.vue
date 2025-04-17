<template>
  <component class="base_icon" :is="iconComponent" />
</template>

<script lang="ts" setup>
import { defineProps, defineAsyncComponent } from 'vue';

type TIconProps = {
  iconName: string;
};

const { iconName } = defineProps<TIconProps>();
const iconComponent = defineAsyncComponent(
  () => import(`../../icons/${iconName}.svg?component`)
);
</script>

<style></style>
