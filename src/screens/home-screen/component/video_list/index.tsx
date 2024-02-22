import React, {Component, useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  Image,
  Text,
  View,
  Alert,
} from 'react-native';
import {VIDEO_CATALOG} from '../../../../constants/VideoCatalog';
import {ThemeContext} from '../../../../context/theme-context';
import {lightTheme, darkTheme} from './style';
import {ItemSeparatorComponent} from '../../../../components/item-separator';
import {VideoItem} from '../video_item';

const VideoList = ({
  onVideoItemSelect,
  onSmartPlayAction,
}: {
  onVideoItemSelect: Function;
  onSmartPlayAction: Function;
}) => {
  const [videos, setVideos] = useState(VIDEO_CATALOG);

  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={styles.videoListContainer}>
      <FlatList
        data={videos}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={({item, index}) => (
          <VideoItem
            item={item}
            onSmartPlayAction={onSmartPlayAction}
            onVideoItemSelect={onVideoItemSelect}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default VideoList;
