import {Video} from '../interfaces/Video';
// @ts-ignore
import {VizbeeVideo, VizbeeManager} from 'react-native-vizbee-sender-sdk';

export const useSmartPlay = ({
  onSmartPlayAction,
}: {
  onSmartPlayAction: Function;
}) => {
  const callSmartPlay = (video: Video) => {
    // VizbeeVideo
    let vizbeeVideo = new VizbeeVideo();
    vizbeeVideo.guid = video.guid;
    vizbeeVideo.title = video.title || '';
    vizbeeVideo.subtitle = video.subtitle || '';
    vizbeeVideo.imageUrl = video.imageUrl || '';
    vizbeeVideo.streamUrl = video.streamUrl;
    vizbeeVideo.isLive = video.isLive;
    vizbeeVideo.startPositionInSeconds = video.startPositionInSeconds || 0;

    VizbeeManager.smartPlay(
      vizbeeVideo,
      //@ts-ignore
      vizbeeConnectedDeviceInfo => {
        console.info(
          `VideoList::onItemSelect - SmartPlay playing on TV  ${vizbeeConnectedDeviceInfo.connectedDeviceFriendlyName}`,
        );
        onSmartPlayAction(false);
      },
      //@ts-ignore
      playOnPhoneReason => {
        console.info(
          `VideoList::onItemSelect - SmartPlay play on phone with reason ${playOnPhoneReason}`,
        );
        onSmartPlayAction(true);
      },
    );
  };

  return {callSmartPlay};
};
