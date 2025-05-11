import { ref } from 'vue';
import BaseModal from './BaseModal.vue';
import Button from '../Button/Button.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BaseModal> = {
  title: 'Components/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'boolean', description: 'Affiche ou masque la modal' }
  },
  args: {
    show: false
  }
};

export default meta;

type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseModal, Button, BaseIcon },
    setup() {
      const showModal = ref(false);

      const openModal = () => {
        showModal.value = true;
      };
      const handleClose = () => {
        showModal.value = false;
      };

      return { args, showModal, openModal, handleClose };
    },
    template: `
      <button @click="openModal" style="margin-bottom: 1rem;">Open Modal</button>
      <BaseModal :show="showModal" @close="handleClose">
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
    `,
    // Ajoute le style ici pour la story
    style: `
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
    `
  })
};
