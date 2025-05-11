import ProfileCard from './ProfileCard.vue';
import Button from '../Button/Button.vue';
import BaseIcon from '../BaseIcon/BaseIcon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

// Exemples d'icônes pour les réseaux sociaux
const icons = [{ iconName: 'linkedin' }, { iconName: 'github' }, { iconName: 'twitter' }];

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {
    thumbnail: { control: 'text', description: 'URL de la photo de profil' },
    name: { control: 'text', description: 'Nom de la personne' },
    position: { control: 'text', description: 'Poste ou fonction' },
    description: { control: 'text', description: 'Description courte' },
    buttonLabel: { control: 'text', description: 'Texte du bouton' }
    // icons ne passe pas en argType ici car il est importé dans le composant
  },
  args: {
    thumbnail: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Alex Martin',
    position: 'Lead Developer',
    description: 'Passionate about building scalable web applications and leading teams.',
    buttonLabel: 'Contact'
    // icons est utilisé en interne dans le composant, pas besoin de le passer ici
  }
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {}
};

export const CustomProfile: Story = {
  args: {
    thumbnail: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sophie Dubois',
    position: 'UX Designer',
    description: 'Designing delightful user experiences for modern products.',
    buttonLabel: 'Voir le profil'
  }
};
