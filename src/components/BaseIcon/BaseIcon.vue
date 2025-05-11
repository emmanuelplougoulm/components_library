<template>
  <component :is="iconComponent" v-if="iconComponent" class="base_icon" />
</template>

<script lang="ts" setup>
import { defineProps, shallowRef, watchEffect } from 'vue';

type TIconProps = {
  iconName: string;
};

const { iconName } = defineProps<TIconProps>();

const iconComponent = shallowRef();

watchEffect(async () => {
  try {
    iconComponent.value = await import(`../../icons/${iconName}.svg?component`);
  } catch (e) {
    console.error(`Icône non trouvée : ${iconName}`, e);
  }
});
</script>

<style>
.base_icon {
  width: 25px;
  height: 25px;
  color: black;
}
</style>
