import {useEffect, useState} from 'react';
// @ts-ignore
import {VizbeeManager} from 'react-native-vizbee-sender-sdk';

export const useMediaStatusListenerHook = () => {
  // Define state
  const [mediaStatus, setMediaStatus] = useState<{
    playerState: string;
    position: number;
  } | null>(null);

  // useEffect hook
  useEffect(() => {
    const mediaStatusListener = VizbeeManager.addListener(
      'VZB_MEDIA_STATUS',
      videoPlayerStatusCallback,
    );

    return () => {
      VizbeeManager.removeAllListeners(mediaStatusListener);
    };
  }, []);

  /**
   * Callback for the VZB_MEDIA_STATUS Listener
   *
   * @param {Object} newMediaStatus - Media status containing video info
   */
  const videoPlayerStatusCallback = (newMediaStatus: {
    playerState: string;
    position: number;
  }) => {
    setMediaStatus(newMediaStatus);
  };

  return {mediaStatus};
};
