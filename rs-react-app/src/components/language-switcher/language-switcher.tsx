import { useContext } from 'react';

import './language-switcher.scss';

import LanguageContext from '@/context/language-context';

const LANGUAGES = [
  { code: 'en', label: 'ENG' },
  { code: 'ru', label: 'RU' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="lang">
      <ul className="lang__list">
        {LANGUAGES.map(({ code, label }) => (
          <li key={code}>
            <button
              className={`button lang__list-item ${
                language === code ? 'active' : ''
              }`}
              onClick={() => setLanguage(code as 'en' | 'ru')}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LanguageSwitcher;
