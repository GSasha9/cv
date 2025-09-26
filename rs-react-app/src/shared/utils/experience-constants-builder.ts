import { messages } from '../../../messages/messages';
import type { Languages } from '../types/languages';

import type { TimeBlockProps } from '@/components/TimeBlock/TimeBlock';

export const experienceConstantsBuilder = (language: Languages) => {
  const experience: { work: TimeBlockProps[]; education: TimeBlockProps[] } = {
    work: [],
    education: [],
  };

  experience.work = messages[language].expirience.work;
  experience.education = messages[language].expirience.education;

  return experience;
};
