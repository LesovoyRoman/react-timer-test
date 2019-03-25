import React, { useState } from 'react';
import { EN } from './languages/languages';
import Timer from './components/timer/Timer';
import LanguageChanger from './components/language/LanguageChanger';
import ModalComponent from './components/modals/ModalComponent';

export default function App() {
  const [lang, setLang] = useState(EN);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const setNewLang = newLang => setLang(newLang);

  return (
    <div className="App">
      <LanguageChanger lang={lang} setLang={newLang => setNewLang(newLang)} />
      <Timer
        lang={lang}
        setModalContent={(content) => { setModalContent(content()); setIsOpenModal(true); }}
      />
      <ModalComponent
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        lang={lang}
        Content={modalContent}
      />
    </div>
  );
}
