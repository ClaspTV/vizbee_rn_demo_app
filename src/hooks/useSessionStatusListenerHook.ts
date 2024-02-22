import {useEffect, useState} from 'react';
// @ts-ignore
import {VizbeeManager} from 'react-native-vizbee-sender-sdk';

export const useSessionStatusListenerHook = () => {
  // Define state
  const [sessionStatus, setSessionStatus] = useState<string | null>(null);

  // useEffect hook
  useEffect(() => {
    const sessionStatusListener = VizbeeManager.addListener(
      'VZB_SESSION_STATUS',
      sessionStatusCallback,
    );

    return () => {
      VizbeeManager.removeAllListeners(sessionStatusListener);
    };
  }, []);

  /**
   * Update the state of the mini player controls
   *
   * @param {Object} sessionStatus - status containing session info
   * @returns {void}
   */
  const sessionStatusCallback = (sessionStatus: {connectionState: string}) => {
    setSessionStatus(sessionStatus.connectionState);
  };

  return {sessionStatus};
};
