import Tabs from './Tabs.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const defaultTabs = [
  { title: 'Accueil', content: 'Bienvenue sur la page d’accueil.' },
  { title: 'Profil', content: 'Voici les informations de votre profil.' },
  { title: 'Paramètres', content: 'Modifiez vos préférences ici.' }
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object', description: 'Liste des onglets (titre et contenu)' }
  },
  args: {
    tabs: defaultTabs
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {}
};

export const WithManyTabs: Story = {
  args: {
    tabs: [
      { title: 'Tab 1', content: 'Contenu de l’onglet 1' },
      { title: 'Tab 2', content: 'Contenu de l’onglet 2' },
      { title: 'Tab 3', content: 'Contenu de l’onglet 3' },
      { title: 'Tab 4', content: 'Contenu de l’onglet 4' },
      { title: 'Tab 5', content: 'Contenu de l’onglet 5' }
    ]
  }
};

export const CustomContent: Story = {
  args: {
    tabs: [
      { title: 'Présentation', content: '🎉 Ceci est une présentation personnalisée.' },
      { title: 'Code', content: '``````' },
      { title: 'Contact', content: '📧 Contactez-nous à contact@email.com.' }
    ]
  }
};
