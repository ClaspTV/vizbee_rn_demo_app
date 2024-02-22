import {useEffect, useState} from 'react';
import {Appearance as RNAppearance} from 'react-native';

export const useAppearance = () => {
  const [appearance, setAppearance] = useState(RNAppearance.getColorScheme());

  useEffect(() => {
    const handleAppearanceChange = appearance => {
      setAppearance(appearance.colorScheme);
    };

    const initialColorScheme = RNAppearance.getColorScheme();
    setAppearance(initialColorScheme);

    RNAppearance.addChangeListener(handleAppearanceChange);
  }, []);

  return {
    appearance,
  };
};
