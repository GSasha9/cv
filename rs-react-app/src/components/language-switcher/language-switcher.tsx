import { useContext } from 'react';

import './language-switcher.scss';

import LanguageContext from '@/context/language-context';

const LanguageSwitcher = () => {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <nav className="lang">
      <ul className="lang__list">
        <li>
          <button
            className="button lang__list-item"
            onClick={() => setLanguage('en')}
          >
            eng
          </button>
        </li>
        <li>
          <button
            className="button lang__list-item"
            onClick={() => setLanguage('ru')}
          >
            ru
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default LanguageSwitcher;
