import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home-screen';
import AboutScreen from '../../screens/about';
import {ThemeContext} from '../../context/theme-context';
//@ts-ignore
import {VizbeeCastButton} from 'react-native-vizbee-sender-sdk';

import {styles} from './style';
import {CustomTabBar} from '../custom-tab-bar';
import {Locales} from '../../locales';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const color = isDarkMode ? '#ffffff' : '#000000';

  const getOptions = title => {
    return {
      title: title,
      headerRight: () => (
        <VizbeeCastButton style={styles.castButton} tintColor={color} />
      ),
    };
  };

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{tabBarStyle: {backgroundColor: color}}}>
      <Tab.Screen
        name={Locales.home}
        component={HomeScreen}
        options={getOptions(Locales.home)}
      />
      <Tab.Screen
        name={Locales.about}
        component={AboutScreen}
        options={getOptions(Locales.settings)}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
