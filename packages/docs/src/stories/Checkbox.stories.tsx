import { Box, Checkbox, Text, type CheckboxProps } from '@bonizario-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
      >
        {Story()}
        <Text size="sm">Accept terms and conditions</Text>
      </Box>
    ),
  ],
};

export default stories;

export const Primary: StoryObj<CheckboxProps> = {};
