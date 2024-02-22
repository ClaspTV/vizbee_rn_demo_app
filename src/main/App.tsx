import React from 'react';
import TabNavigator from '../components/tab-navigator';
import {ThemeProvider} from '../context/theme-context';
import {NavContainer} from '../components/nav-container';

const App = () => {
  return (
    <ThemeProvider>
      <NavContainer>
        <TabNavigator />
      </NavContainer>
    </ThemeProvider>
  );
};

export default App;
