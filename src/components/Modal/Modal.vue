<script setup>
import { ref } from 'vue';
import BaseModal from '@components/BaseModal/BaseModal.vue';

const showModal = ref(false);
</script>

<template>
  <button @click="showModal = true">Open</button>
  <BaseModal :show="showModal" @close="showModal = false">
    <h2>Title</h2>
    <p>Content</p>
    <button @click="showModal = false">Close</button>
  </BaseModal>
</template>
