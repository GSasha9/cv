import './profile.scss';

import { CVText } from '@/shared/constants/cv-text';

const Profile = () => {
  return (
    <div className="profile">
      <img
        className="profile-photo-img"
        src="./photo.png"
        alt="Portrait of Sasha"
      ></img>

      <div className="profile__info">
        <h1 className="profile__name">{CVText.name.toUpperCase()}</h1>
        <div className="profile__role">{CVText.role}</div>
      </div>
    </div>
  );
};

export default Profile;
