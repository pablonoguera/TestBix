import Button from './index';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Send',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
