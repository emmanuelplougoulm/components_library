import ProfileCard from './ProfileCard.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Carte de profil statique avec image, nom, pseudo et témoignage.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  render: () => ({
    components: { ProfileCard },
    template: `<ProfileCard />`
  })
};
