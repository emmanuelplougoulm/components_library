<template>
  <div class="profile_card">
    <div class="profile_card_details">
      <img :src="thumbnail" class="profile_card_image" />
      <div>
        <div class="profile_card_name">{{ name }}</div>
        <div class="profile_card_position">{{ position }}</div>
      </div>
      <div class="profile_card_description">{{ description }}</div>
    </div>
    <div class="profile_card_actions">
      <div class="profile_card_button">
        <Button
          class="profile_card_button"
          size="md"
          variant="primary"
          :label="buttonLabel"
        />
      </div>
      <div class="profile_card_socials">
        <div v-for="icon in icons" class="profile_card_icon">
          <BaseIcon :iconName="icon.iconName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import Button from '@components/Button/Button.vue';
import { icons } from './config';
import BaseIcon from '@components/BaseIcon/BaseIcon.vue';

type TProfileCardProps = {
  thumbnail?: string;
  name?: string;
  position?: string;
  description?: string;
  buttonLabel?: string;
  socials?: string;
};

defineProps<TProfileCardProps>();
</script>

<style>
.base_icon {
  fill: var(--color-primary-bg);
}

.base_icon:hover {
  fill: var(--color-primary-hover-bg);
}

.profile_card {
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 16px;
  border-radius: 8px;
  box-shadow:
    0px 1px 2px 0 rgb(0 0 0 / 0.06),
    0px 1px 3px 0 rgb(0 0 0 / 0.1);
}

.profile_card_details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.profile_card_image {
  width: 64px;
}

.profile_card_name {
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #171717;
  text-transform: capitalize;
}

.profile_card_position {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #525252;
  text-transform: capitalize;
}

.profile_card_description {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #525252;
}

.profile_card_actions {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.profile_card_button {
  width: 100%;
}

.profile_card_socials {
  display: flex;
  justify-content: center;
  align-self: stretch;
  gap: 16px;
}

.profile_card_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  width: 20px;
  height: 20px;
}
</style>
