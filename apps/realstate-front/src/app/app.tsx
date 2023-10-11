import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import './app.css'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="realstate-front" />
    </StyledApp>
  );
}

export default App;
