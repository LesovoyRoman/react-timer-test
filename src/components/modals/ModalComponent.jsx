import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../buttons/Button';
import { getTranslation, LANGUAGE_OPTIONS, EN } from '../../languages/languages';

const propTypesComponent = {
  classNames: PropTypes.string,
  Content: PropTypes.instanceOf(Object),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  lang: PropTypes.string,
};

const defaultPropsComponent = {
  onClose: () => {},
  classNames: '',
  Content: {},
  isOpen: false,
  lang: EN,
};

Modal.setAppElement('#root')

export default function ModalComponent(props) {
  const { classNames, Content, isOpen, onClose, lang } = props;

  return (
    <Modal className={classNames} isOpen={isOpen}>
      <Button
        label={getTranslation(lang, LANGUAGE_OPTIONS.CLOSE)}
        onClick={onClose}
      />
      { Content }
    </Modal>
  );
}

/**
 * Prop types of Modal Component
 * @type {{onClick: shim, classNames: shim, styles, Content}}
 */
ModalComponent.propTypes = {
  ...propTypesComponent,
};
ModalComponent.defaultProps = {
  ...defaultPropsComponent,
};
