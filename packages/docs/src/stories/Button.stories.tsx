import { Button, type ButtonProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
};
