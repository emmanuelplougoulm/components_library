import Dropdown from './Dropdown.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue'; // adapte le chemin si besoin
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const optionsWithIcons = [
  { name: 'Apple', icon: 'apple' },
  { name: 'Banana', icon: 'banana' },
  { name: 'Orange', icon: 'orange' }
];

const optionsNoIcons = [
  { name: 'Paris', icon: '' },
  { name: 'Berlin', icon: '' },
  { name: 'Tokyo', icon: '' }
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texte affiché si aucune option sélectionnée'
    },
    hasIcon: { control: 'boolean', description: 'Affiche les icônes dans les options' },
    modelValue: { control: 'text', description: 'Valeur sélectionnée (v-model)' },
    options: { control: 'object', description: 'Liste des options' }
  },
  args: {
    placeholder: 'Sélectionnez une option',
    hasIcon: true,
    options: optionsWithIcons,
    modelValue: ''
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Story contrôlée (v-model)
export const Default: Story = {
  render: (args) => ({
    components: { Dropdown, BaseIcon },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <Dropdown
        v-bind="args"
        v-model="value"
      />
      <div style="margin-top: 1rem; font-size: 0.9rem;">
        Valeur sélectionnée : <b>{{ value }}</b>
      </div>
    `
  })
};

export const WithIcons: Story = {
  args: {
    hasIcon: true,
    options: optionsWithIcons,
    placeholder: 'Choisissez un fruit',
    modelValue: ''
  }
};

export const WithoutIcons: Story = {
  args: {
    hasIcon: false,
    options: optionsNoIcons,
    placeholder: 'Choisissez une ville',
    modelValue: ''
  }
};

export const Preselected: Story = {
  args: {
    hasIcon: true,
    options: optionsWithIcons,
    modelValue: 'Banana',
    placeholder: 'Choisissez un fruit'
  }
};
