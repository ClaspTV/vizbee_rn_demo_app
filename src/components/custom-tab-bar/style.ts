import {StyleSheet} from 'react-native';

export const darkTheme = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 2,
    backgroundColor: 'black',
  },
  tabIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const lightTheme = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 2,
    backgroundColor: 'white',
  },
  tabIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
