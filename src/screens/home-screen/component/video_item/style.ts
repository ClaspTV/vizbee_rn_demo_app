import {StyleSheet} from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
    resizeMode: 'contain',
  },
  textView: {
    flex: 1,
    padding: 10,
    alignItem: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '80%',
    textAlignVertical: 'center',
    color: '#000',
  },
});

export const darkTheme = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
    resizeMode: 'contain',
  },
  textView: {
    flex: 1,
    padding: 10,
    alignItem: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '80%',
    textAlignVertical: 'center',
    color: '#fff',
  },
});
