import './language-switcher.scss';

const LanguageSwitcher = () => {
  return (
    <nav className="lang">
      <ul className="lang__list">
        <li>
          <button className="button lang__list-item">eng</button>
        </li>
        <li>
          <button className="button lang__list-item">ru</button>
        </li>
      </ul>
    </nav>
  );
};

export default LanguageSwitcher;
