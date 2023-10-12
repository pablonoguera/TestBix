import Input from './index';
import { ChakraProvider } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  render: () => (
    <ChakraProvider>
      <Input label="Email" />
    </ChakraProvider>
  ),
};

export const Password: Story = {
  render: () => (
    <ChakraProvider>
      <Input label="Password" type="password" />
    </ChakraProvider>
  ),
};
