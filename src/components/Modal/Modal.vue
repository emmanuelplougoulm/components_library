<script setup>
import { ref } from 'vue';
import BaseModal from '@components/BaseModal/BaseModal.vue';
import Button from '@components/Button/Button.vue';
import BaseIcon from '@components/BaseIcon/BaseIcon.vue';

const showModal = ref(true);

const handleClose = () => {
  showModal = false;
};
</script>

<template>
  <button @click="showModal = true">Open</button>
  <BaseModal :show="showModal" @close="showModal = false">
    <div class="content">
      <div class="title">
        <h2 class="text">Are you sure you want to <br />leave the process?</h2>
        <BaseIcon class="icon" iconName="close-cross" />
      </div>
      <p class="description">
        Your upgrade plan process will be cancelled. <br />You need to start again if you
        leave the process.
      </p>
    </div>
    <div class="button__group">
      <Button
        class="button"
        label="no"
        size="md"
        variant="secondary"
        :onClick="handleClose"
      />
      <Button
        class="button"
        label="yes"
        size="md"
        variant="primary"
        :onClick="handleClose"
      />
    </div>
  </BaseModal>
</template>

<style>
* {
  box-sizing: border-box;
}

h2,
p {
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.content .title {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
}

.content .title .text {
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #171717;
  margin: 0;
}

.content .title .icon {
  width: 24px;
  height: 24px;
  color: #525252;
}

.content .description {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #525252;
}

.button__group {
  display: flex;
  gap: 12px;
}

.button__group .button {
  flex: 1;
}
</style>
