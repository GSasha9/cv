import { useContext } from 'react';

import { messages } from '../../../messages/messages';

import './profile.scss';

import LanguageContext from '@/context/language-context';

const Profile = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="profile">
      <img
        className="profile-photo-img"
        src="./photo.png"
        alt="Portrait of Sasha"
      ></img>

      <div className="profile__info">
        <h1 className="profile__name">{messages[language].name}</h1>
        <div className="profile__role">{messages[language].role}</div>
      </div>
    </div>
  );
};

export default Profile;
