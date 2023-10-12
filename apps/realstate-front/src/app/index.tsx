import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './utils/ErrorBoundary';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Router from './router';
import { buttonTheme } from './theme/components/IconButton';
import GlobalStyle from './styles/globalStyles';

// import './app.css';
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

export function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ChakraProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
