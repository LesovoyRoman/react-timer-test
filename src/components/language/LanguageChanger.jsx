import React from 'react';
import PropTypes from 'prop-types';
import Radio from './../../components/buttons/Radio';
import { EN, RU, UA } from './../../languages/languages';
import { ACTIVE } from "./languagesConfig";

/**
 * Language component (change RU / EN / UA)
 * @param props
 * @returns {*}
 * @constructor
 */
export default function LanguageChanger(props) {
  const { lang, setLang } = props;
  return (
    <div className="lang-changer">
      <Radio
        classNames={lang === EN ? ACTIVE : ''}
        checked={lang === EN} value={EN}
        onChange={event => setLang(event.target.value)}
      />
      <Radio
        classNames={lang === RU ? ACTIVE : ''}
        checked={lang === RU} value={RU}
        onChange={event => setLang(event.target.value)}
      />
      <Radio
        classNames={lang === UA ? ACTIVE : ''}
        checked={lang === UA} value={UA}
        onChange={event => setLang(event.target.value)}
      />
    </div>
  )
}
LanguageChanger.propTypes = {
  lang: PropTypes.string,
  setLang: PropTypes.func,
};
LanguageChanger.defaultProps = {
  lang: EN,
  setLang: () => {},
};
