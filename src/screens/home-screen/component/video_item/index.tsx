import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../../../../context/theme-context';
import {lightTheme, darkTheme} from './style';
import {useItemSelect} from './hooks/useItemSelect';
import {Video} from '../../../../interfaces/Video';

export const VideoItem = ({
  item,
  onVideoItemSelect,
  onSmartPlayAction,
}: {
  item: Video;
  onVideoItemSelect: Function;
  onSmartPlayAction: Function;
}) => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? darkTheme : lightTheme;

  const {onItemSelect} = useItemSelect({onVideoItemSelect, onSmartPlayAction});

  return (
    <TouchableOpacity style={styles.container} onPress={onItemSelect(item)}>
      <Image source={{uri: item.imageUrl}} style={styles.imageView} />
      <View style={styles.textView}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
