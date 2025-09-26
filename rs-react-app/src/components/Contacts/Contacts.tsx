import { useContext } from 'react';

import { messages } from '../../../messages/messages';
import Section from '../Section/Section';

import './Contacts.scss';

import LanguageContext from '@/context/language-context';
import { CONTACTS } from '@/shared/constants/contacts';

const Contacts = () => {
  const { language } = useContext(LanguageContext);

  const contactsList = (Object.keys(CONTACTS) as (keyof typeof CONTACTS)[]).map(
    (el) => (
      <li key={el.slice(0, 4)} className="list-item">
        <span
          className="list-item-pic"
          style={{ backgroundImage: `url(${CONTACTS[el].pic})` }}
        ></span>
        {el === 'link' ? (
          <a
            className="list-item-link"
            href={`https://${CONTACTS[el].content}`}
          >
            {CONTACTS[el].content}
          </a>
        ) : (
          <span>{CONTACTS[el].content}</span>
        )}
      </li>
    )
  );

  return (
    <Section width="100%">
      <h2 className="title-second">{messages[language].contacts}</h2>
      <ul className="contacts__list">{contactsList}</ul>
    </Section>
  );
};

export default Contacts;
