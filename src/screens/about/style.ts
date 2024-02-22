import {StyleSheet} from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  text: {color: 'black', fontWeight: '700', fontSize: 14},
  vSpacer: {height: 40},
  desc: {color: 'black', fontWeight: '400', fontSize: 18, textAlign: 'center'},
  subtitle: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  sessionInfo: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
  },
  text: {color: 'white', fontWeight: '700', fontSize: 22, textAlign: 'center'},
  vSpacer: {height: 40},
  desc: {color: 'white', fontWeight: '400', fontSize: 18, textAlign: 'center'},
  subtitle: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  sessionInfo: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
  },
});
