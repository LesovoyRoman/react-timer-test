import React, { useState } from 'react';
import { EN } from './languages/languages';
import Timer from './components/timer/Timer';
import LanguageChanger from './components/language/LanguageChanger';

export default function App() {
  const [lang, setLang] = useState(EN);
  const setNewLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <div className="App">
      <LanguageChanger lang={lang} setLang={newLang => setNewLang(newLang)} />
      <Timer lang={lang} />
    </div>
  );
}
