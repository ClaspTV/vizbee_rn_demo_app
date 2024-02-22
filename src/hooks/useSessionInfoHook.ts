import {useEffect, useState} from 'react';
// @ts-ignore
import {VizbeeManager} from 'react-native-vizbee-sender-sdk';

export const useSessionInfoHook = ({isCasting}: {isCasting: Boolean}) => {
  const [castingTo, setCastingTo] = useState<string | null>(null);

  useEffect(() => {
    if (isCasting) {
      getConnectedDeviceInfo();
    } else {
      setCastingTo(null);
    }
  }, [isCasting]);

  /**
   * Get connected device friendly name
   */
  const getConnectedDeviceInfo = () => {
    VizbeeManager.getSessionConnectedDevice()
      .then((connectedDeviceInfo: {connectedDeviceFriendlyName: string}) => {
        setCastingTo(connectedDeviceInfo?.connectedDeviceFriendlyName || 'TV');
      })
      .catch(() => {
        setCastingTo('TV');
      });
  };

  return {castingTo};
};
