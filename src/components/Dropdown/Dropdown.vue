<template>
  <div class="dropdown" @click="toggleDropdown" @blur="closeDropdown">
    <div class="dropdown-selected">
      {{ selectedOption || placeholder }}
    </div>
    <div v-if="isOpen" class="dropdown-options">
      <div
        v-for="(option, idx) in options"
        :key="idx"
        class="dropdown-option"
        @click.stop="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import { options } from './config';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  // modelValue: {
  //   type: String,
  //   default: ''
  // },
  placeholder: {
    type: String,
    default: 'Sélectionnez...'
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    selectedOption.value = val;
  }
);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
}

function selectOption(option) {
  selectedOption.value = option;
  emit('update:modelValue', option);
  isOpen.value = false;
}
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 272px;
  cursor: pointer;
  border: 1px red solid;

  font-family: 'Noto Sans';
}
.dropdown-selected {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #ffffff;

  padding: 8px 12px;

  border: 0.5px solid #e5e5e5;
  box-shadow:
    0px 1px 2px -1px rgb(0 0 0 / 0.1),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #171717;
}
.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 8px;
  border: 0.5px solid #e5e5e5;
  box-shadow:
    0px 1px 2px -1px rgb(0 0 0 / 0.1),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);

  z-index: 100;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #171717;
}
.dropdown-option {
  padding: 8px;
  cursor: pointer;
}
.dropdown-option:hover {
  background-color: #fafafa;
}
</style>
