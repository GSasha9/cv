import LanguageSwitcher from '../language-switcher/language-switcher';
import Profile from '../profile/profile';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <LanguageSwitcher />
      <Profile />
    </header>
  );
};

export default Header;
