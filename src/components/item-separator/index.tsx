import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../context/theme-context';
import {lightTheme, darkTheme} from './style';

export const ItemSeparatorComponent = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? darkTheme : lightTheme;

  return <View style={styles.container} />;
};
