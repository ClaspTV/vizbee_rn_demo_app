import React, {createContext, useEffect, useState} from 'react';
import {useAppearance} from '../../hooks/useAppearance';
import {Appearance as RNAppearance} from 'react-native';

export const ThemeContext = createContext({
  isDarkMode: RNAppearance.getColorScheme() == 'dark',
});

export const ThemeProvider = ({children}: {children: any}) => {
  const {appearance} = useAppearance();
  const [isDarkMode, setIsDarkMode] = useState(appearance == 'dark');

  useEffect(() => {
    setIsDarkMode(appearance == 'dark');
  }, [appearance]);

  return (
    <ThemeContext.Provider value={{isDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
