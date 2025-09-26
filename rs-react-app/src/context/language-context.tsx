import { createContext } from 'react';

interface LanguageContextType {
  language: 'en' | 'ru';
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'ru'>>;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export default LanguageContext;
