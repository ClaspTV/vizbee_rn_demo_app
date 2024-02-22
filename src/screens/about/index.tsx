import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSessionInfoHook} from '../../hooks/useSessionInfoHook';
import {darkTheme, lightTheme} from './style';
import {ThemeContext} from '../../context/theme-context';
import {Locales} from '../../locales';
import {SESSION_STATUS} from '../../constants/SessionState';
// @ts-ignore
import {VizbeeManager} from 'react-native-vizbee-sender-sdk';
import {useSessionStatusListenerHook} from '../../hooks/useSessionStatusListenerHook';

const AboutScreen = () => {
  const [isCasting, setCasting] = useState(false);

  const {isDarkMode} = useContext(ThemeContext);
  const styles = isDarkMode ? darkTheme : lightTheme;

  const updateCastingStatus = async () => {
    const sessionStatus = await VizbeeManager.getSessionState();
    updateIsCasting(sessionStatus);
  };

  const updateIsCasting = sessionStatus => {
    if (sessionStatus && sessionStatus === SESSION_STATUS.NOT_CONNECTED) {
      setCasting(false);
    } else if (sessionStatus && sessionStatus === SESSION_STATUS.CONNECTED) {
      setCasting(true);
    }
  };

  useEffect(() => {
    updateCastingStatus();
  }, []);

  // Custom hook to retrieve session information for media casting

  const {sessionStatus} = useSessionStatusListenerHook();

  useEffect(() => {
    updateIsCasting(sessionStatus);
  }, [sessionStatus]);

  const {castingTo} = useSessionInfoHook({isCasting});
  console.log({isCasting});
  return (
    <View style={styles.container}>
      <View style={styles.vSpacer} />
      <Text style={styles.text}>About Vizbee Demo App</Text>
      <View style={styles.vSpacer} />
      <Text style={styles.desc}>{Locales.aboutApp}</Text>
      <View style={styles.vSpacer} />
      <View style={styles.vSpacer} />
      <Text style={styles.subtitle}>Current Session Information</Text>
      <View style={styles.vSpacer} />
      <Text style={styles.sessionInfo}>
        {isCasting
          ? `${Locales.castingTo}: ${castingTo}`
          : Locales.noActiveCastingSession}
      </Text>
    </View>
  );
};

export default AboutScreen;
