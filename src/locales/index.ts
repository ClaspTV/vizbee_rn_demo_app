import English from './English';

const LanguageKeys: {[K: string]: 'en-US' | 'hi-en' | 'hi'} = {
  'en-US': 'en-US',
};

const Languages: {[K in keyof any]: any} = {
  [LanguageKeys['en-US']]: English,
};

let userLanguage: 'en-US' | 'hi-en' | 'hi' = LanguageKeys['en-US'],
  Locales: {[K in keyof any]: any} & {
    getLanguage: () => 'en-US' | 'hi-en' | 'hi';
  } = {
    ...Languages[userLanguage],
    getLanguage: () => LanguageKeys['en-US'],
  };

export {Locales};
