import { Box, Text, type BoxProps } from '@bonizario-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing the box element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};

export default stories;

export const Primary: StoryObj<BoxProps> = {};
