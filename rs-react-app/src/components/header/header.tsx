import LanguageSwitcher from '../Language-switcher/Language-switcher';
import Profile from '../Profile/Profile';

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
