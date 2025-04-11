<template>
    <button :class="['generic-button', variant]" :disabled="disabled" @click="onClick">
        <slot>{{ label }}</slot>
    </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface ButtonProps {
    label?: string;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    onClick?: () => void;
}


defineProps<ButtonProps>();

defineEmits(['click']);

</script>

<style scoped>
button {
    all: unset
}
</style>