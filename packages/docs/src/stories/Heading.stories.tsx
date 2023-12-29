import { Heading, type HeadingProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
};

export default stories;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default heading is an `h2`, but it can be changed with the `as` prop.',
      },
    },
  },
};
