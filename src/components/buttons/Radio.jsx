import React from 'react';
import PropTypes from 'prop-types';
import { DISABLED } from './buttonsConfig';

/**
 * Custom radio input component
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Radio(props) {
  const { onChange, classNames, styles, disabled, checked, value } = props;
  const uniqueId = Math.random().toString(36).substring(7);
  return (
    <label htmlFor={uniqueId} className={`${classNames} ${'radio'} ${disabled ? DISABLED : ''}`}>
      <span>{value}</span>
      <input
        id={uniqueId}
        type='radio'
        checked={checked}
        value={value}
        onChange={event => onChange(event)}
        disabled={Number(disabled)}
        className={`${disabled ? DISABLED : ''}`}
        style={styles}
      />
    </label>
  );
}

/**
 * Prop types of Radio Component
 * @type {{eventClick: *, classNames: *, styles: *, disabled: *, label: *}}
 */
Radio.propTypes = {
  onChange: PropTypes.func,
  classNames: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
};
Radio.defaultProps = {
  onChange: () => {},
  classNames: '',
  styles: {},
  disabled: false,
  checked: false,
  value: 'radio',
};
