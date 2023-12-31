import {
  Box,
  Text,
  TextInput,
  type TextInputProps,
} from '@bonizario-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Name</Text>
          {Story()}
        </Box>
      );
    },
  ],
};

export default stories;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
};
