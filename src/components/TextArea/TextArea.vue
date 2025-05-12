<template>
  <div class="textarea">
    <label :for="uniqueId" class="textarea__label">{{ label }}</label>
    <textarea
      :id="uniqueId"
      :class="[
        `textarea__textarea`,
        { [`textarea--limit-exceed`]: isLimitExceed },
        { [`textarea--error`]: error }
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="text"
      :aria-describedby="error ? `${uniqueId}-error` : null"
      :aria-invalid="error ? 'true' : 'false'"
    ></textarea>

    <div :class="[`textarea__messages`, { [`textarea__messages--flex-start`]: error }]">
      <p
        v-if="error"
        role="status"
        class="textarea__error__message"
        :id="`${uniqueId}-error`"
      >
        {{ errorMessage }}
      </p>

      <span
        v-if="!error"
        :class="[`textarea__count`, { [`textarea__count--limit`]: isLimitExceed }]"
      >
        {{ `${text.length}/${LIMIT}` }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
type TTextAreaProps = {
  label: string;
  errorMessage: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  initialValue?: string;
};

import { ref, watch } from 'vue';
import '../../styles/variables.css';
const uniqueId = `textarea-${Math.random().toString(36)}`;

const {
  label,
  disabled = false,
  error = false,
  initialValue
} = defineProps<TTextAreaProps>();

const LIMIT = 500;

const text = ref<string>(initialValue || '');
const isLimitExceed = ref<boolean>(false);

watch(
  text,
  (newText) => {
    isLimitExceed.value = newText.length > LIMIT;
  },
  { immediate: true }
);
</script>

<style>
/* VARIABLES */
:root {
  --color-border: #e5e5e5;
  --color-background: #fafafa;
  --color-placeholder: #737373;
  --color-placeholder-disabled: #a3a3a3;
  --color-border-disabled: #f5f5f5;
  --color-text: #171717;
  --color-label: #404040;
  --color-error: #d92d20;
  --color-focus: #444ce7;
  --color-focus-shadow: rgba(68, 76, 231, 0.12);
  --color-error-shadow: rgba(217, 45, 32, 0.12);
  --color-icon: #a3a3a3;
}

/* BASE STYLES */
* {
  box-sizing: border-box;
  margin: 0;
}

textarea {
  resize: none;
  overflow-y: hidden;
}

.textarea {
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 4px;
}

/* LABEL */

.textarea__label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-label);
}

/* TEXT-AREA STYLES */

.textarea__textarea {
  flex-grow: 1;
  background-color: var(--color-background);
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  min-height: 108px;
}

.textarea__textarea::placeholder {
  color: var(--color-placeholder);
}

/* FOCUS STATE */
.textarea__textarea:focus {
  box-shadow:
    0 0 0 1px var(--color-focus),
    0 1px 2px rgba(16, 24, 40, 0.05),
    0 0 0 4px var(--color-focus-shadow);
}

/* DISABLED STATE */
.textarea__textarea:disabled {
  border-color: var(--color-border-disabled);
}

.textarea__count {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: var(--color-placeholder);
}

/* ERROR STATE */
.textarea--limit-exceed {
  box-shadow: none;
  border-color: red;
}

.textarea--error {
  border-color: var(--color-error);
}

.textarea--error:focus {
  border-color: var(--color-error);
  box-shadow:
    0 0 0 1px var(--color-error),
    0 1px 2px rgba(16, 24, 40, 0.05),
    0 0 0 4px rgba(217, 45, 32, 0.12);
  outline: none;
}

/* ERROR && PAGINATION MESSAGES */

.textarea__messages {
  display: flex;
  justify-content: flex-end;
}

.textarea__messages--flex-start {
  display: flex;
  justify-content: flex-start;
}

.textarea__count--limit {
  color: var(--color-error);
}

.textarea__error__message {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-error);
}
</style>
