const CONSTANTS = {
  darkTheme: {
    primaryColor: '#1C1C1C',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#FFFFFF',
  },
  lightTheme: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#000000',
    tertiaryColor: '#000000',
  },
  props: {
    playActionButtonType: 'playpause',
    shouldDisablePlayPauseButtonForLive: true,
  },
};

const VizbeeStyles = (isDark: boolean) => {
  const LightStyle = {
    backgroundLayerStyle: {
      backgroundColor: CONSTANTS.lightTheme.primaryColor,
    },
    progressViewStyle: {
      backgroundColor: '#0000001A',
      color: '#E60000',
    },
    titleStyle: {
      color: CONSTANTS.lightTheme.tertiaryColor,
    },
    subTitleStyle: {
      color: '#00000080',
    },
    buttonStyle: {
      color: CONSTANTS.lightTheme.tertiaryColor,
    },
  };

  const DarkStyle = {
    backgroundLayerStyle: {
      backgroundColor: CONSTANTS.darkTheme.primaryColor,
    },
    progressViewStyle: {
      backgroundColor: `#FFFFFF40`,
      color: '#E60000',
    },
    subTitleStyle: {
      color: '#FFFFFF66',
    },
  };

  const getStyle = (isDark: boolean) => {
    return isDark ? DarkStyle : LightStyle;
  };

  return {...CONSTANTS.props, ...getStyle(isDark)};
};

export default VizbeeStyles;
