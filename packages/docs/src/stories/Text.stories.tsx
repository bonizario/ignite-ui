import { Text, type TextProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
};

export default stories;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
