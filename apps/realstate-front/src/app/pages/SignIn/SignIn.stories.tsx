import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { buttonTheme } from '../../theme/components/IconButton';
import type { Meta, StoryObj } from '@storybook/react';
import SignIn from './index';

const theme = extendTheme({
  colors: {
    bixBlue: '#246BFD',
  },
  components: {
    Button: buttonTheme,
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'bixBlue',
            borderColor: 'bixBlue',
          },
        },
      },
    },
  },
});

const meta: Meta<typeof SignIn> = {
  component: SignIn,
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <SignIn />
      </ChakraProvider>
    </BrowserRouter>
  ),
};
