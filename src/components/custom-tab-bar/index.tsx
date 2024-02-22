import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
//@ts-ignore
import {VizbeeMiniCastBar} from 'react-native-vizbee-sender-sdk';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {darkTheme, lightTheme} from './style';
import {ThemeContext} from '../../context/theme-context';
import {getMiniPlayerProps} from '../../utils';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const CustomTabBar: React.FC<TabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? darkTheme : lightTheme;

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <VizbeeMiniCastBar {...getMiniPlayerProps(isDarkMode)} />
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={{selected: isFocused}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabIcon}
              key={route.name}>
              {route.name === 'Home' ? (
                <Ionicons
                  name={isFocused ? 'home' : 'home-outline'}
                  size={24}
                  color={isFocused ? 'tomato' : 'gray'}
                />
              ) : (
                <Ionicons
                  name={
                    isFocused
                      ? 'information-circle'
                      : 'information-circle-outline'
                  }
                  size={24}
                  color={isFocused ? 'tomato' : 'gray'}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{height: insets.bottom}} />
    </>
  );
};
