import React from 'react';
import PropTypes from 'prop-types';
import { DISABLED } from './buttonsConfig';

const propTypesComponent = {
  onClick: PropTypes.func,
  classNames: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

const defaultPropsComponent = {
  onClick: () => {},
  classNames: '',
  styles: {},
  disabled: false,
};

/**
 * Custom button component
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Button(props) {
  const { onClick, classNames, styles, label, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={Number(disabled)}
      className={`${classNames} button-custom ${disabled ? DISABLED : ''}`}
      style={styles}
    >
      {label}
    </button>
  );
}

/**
 * Prop types of Button Component
 * @type {{eventClick: *, classNames: *, styles: *, disabled: *, label: *}}
 */
Button.propTypes = {
  ...propTypesComponent,
};
Button.defaultProps = {
  ...defaultPropsComponent,
};
