import { useState } from 'react';

import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import LanguageContext from './context/language-context';

function App() {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header></Header>
      <main className="main">
        <About />
        <Experience />
      </main>
    </LanguageContext.Provider>
  );
}

export default App;
