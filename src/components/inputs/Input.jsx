import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { value, classNames, styles, onChange, placeholder, disabled } = props;

  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      className={classNames}
      style={styles}
    />
  );
}

/**
 * Prop types of Input Component
 * @type {{onChange: shim, c
 * lassNames: shim, value: shim, styles, disabled: shim, placeholder: shim}}
 */
Input.propTypes = {
  onChange: PropTypes.func,
  classNames: PropTypes.string,
  value: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  onChange: () => {},
  classNames: '',
  value: '',
  styles: {},
  placeholder: '',
  disabled: false,
};
