import {StyleSheet} from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  videoViewContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: '30%',
  },
  videoPlayerContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  castButton: {
    width: 32,
    height: 32,
    color: 'black',
  },
  castingToContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  videoViewContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '30%',
  },
  videoPlayerContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  castButton: {
    width: 32,
    height: 32,
    color: 'white',
  },
  castingToContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(1, 1, 1, 0.2)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
