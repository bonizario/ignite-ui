import { Avatar, type AvatarProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/bonizario.png',
    alt: 'Gabriel Bonizário',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

export default stories;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
