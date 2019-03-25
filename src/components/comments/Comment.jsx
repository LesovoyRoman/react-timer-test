import React from 'react';
import PropTypes from 'prop-types';
import Input from './../inputs/Input';
import { getTranslation, LANGUAGE_OPTIONS, EN } from '../../languages/languages';

const propTypesComponent = {
  lang: PropTypes.string,
  comment: PropTypes.string,
  onChange: PropTypes.func,
};
const defaultPropsComponent = {
  lang: EN,
  comment: '',
  onChange: () => {},
};

export default function Comment(props) {
  const { lang, comment, onChange } = props;
  const handleInput = event => onChange(event.target.value);

  return (
    <div className="Comment">
      <Input
        classNames="input-custom"
        placeholder={getTranslation(lang, LANGUAGE_OPTIONS.COMMENT)}
        value={comment}
        onChange={event => handleInput(event)}
      />
    </div>
  );
}

/**
 * Prop types of Comment Component
 * @type {{classNames: shim, styles, text: shim}}
 */
Comment.propTypes = {
  ...propTypesComponent,
};
Comment.defaultProps = {
  ...defaultPropsComponent,
};
