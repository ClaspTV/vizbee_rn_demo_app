import React, {useContext, useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {lightTheme, darkTheme} from './style';
import {ThemeContext} from '../../context/theme-context';
import VideoList from './component/video_list';
//@ts-ignore
import VideoPlayer from 'react-native-video';
import {useSessionStatusListenerHook} from '../../hooks/useSessionStatusListenerHook';
import {useSessionInfoHook} from '../../hooks/useSessionInfoHook';
import {SESSION_STATUS} from '../../constants/SessionState';
import {Video} from '../../interfaces/Video';
import {useSmartPlay} from '../../hooks/useSmartPlay';
import {VIDEO_CATALOG} from '../../constants/VideoCatalog';

const HomeScreen = () => {
  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? darkTheme : lightTheme;

  const [currentVideo, setCurrentVideo] = useState<Video>(VIDEO_CATALOG[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isCasting, setCasting] = useState(false);

  const videoPlayerRef = useRef(null);

  const onSmartPlayAction = (shouldPlayOnPhone: Boolean) => {
    setPaused(!shouldPlayOnPhone);
  };

  const onVideoItemSelect = (video: Video) => {
    setCurrentVideo(video);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const {sessionStatus} = useSessionStatusListenerHook();

  useEffect(() => {
    if (sessionStatus && sessionStatus === SESSION_STATUS.NOT_CONNECTED) {
      setCasting(false);
    } else if (
      sessionStatus &&
      sessionStatus === SESSION_STATUS.CONNECTED &&
      currentVideo
    ) {
      setCasting(true);
      currentVideo.startPositionInSeconds = currentTime;
      callSmartPlay(currentVideo as Video);
      setPaused(true);
    }
  }, [sessionStatus]);

  const {castingTo} = useSessionInfoHook({isCasting});

  const {callSmartPlay} = useSmartPlay({onSmartPlayAction});

  return (
    <View style={styles.container}>
      <View style={styles.videoViewContainer}>
        {castingTo ? (
          <View style={styles.castingToContainer}>
            <Text style={styles.text}>{`Casting to ${castingTo}`}</Text>
          </View>
        ) : (
          <VideoPlayer
            key={currentVideo.streamUrl} // must be different from the existing video to restart the player with the new video
            source={{uri: currentVideo.streamUrl}}
            ref={videoPlayerRef}
            controls={true}
            paused={paused}
            style={styles.videoPlayerContainer}
            onProgress={onProgress}
          />
        )}
      </View>
      <VideoList
        onSmartPlayAction={onSmartPlayAction}
        onVideoItemSelect={onVideoItemSelect}
      />
    </View>
  );
};

export default HomeScreen;
