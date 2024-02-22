import React, {useContext} from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {ThemeContext} from '../../context/theme-context';

export const NavContainer = ({children}: {children: any}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};
