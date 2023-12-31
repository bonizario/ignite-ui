import { Box, MultiStep, type MultiStepProps } from '@bonizario-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const stories: Meta<MultiStepProps> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      );
    },
  ],
};

export default stories;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
