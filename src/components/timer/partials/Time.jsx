import React from 'react';
import PropTypes from 'prop-types';
import { secondsToHms } from '../../../services/timer/timerCounter';

export const Time = (props) => {
  /**
  * Time vars
  */
  const { h, m, s, ms } = secondsToHms(props.currentTime);

  return (
    <>
      <div className={`${props.inList ? 'clockList' : ''} clock`}>
        <div className="numbers">
          <p className="hours">{ h }</p>
          <p className="placeholder">88</p>
        </div>
        <div className="colon">
          <p>:</p>
        </div>
        <div className="numbers">
          <p className="minutes">{ m }</p>
          <p className="placeholder">88</p>
        </div>
        <div className="colon">
          <p>:</p>
        </div>
        <div className="numbers">
          <p className="seconds">{ s }</p>
          <p className="placeholder">88</p>
        </div>
        <div className="colon">
          <p>:</p>
        </div>
        <div className="numbers">
          <p className="milliseconds">{ ms }</p>
          <p className="placeholder">88</p>
        </div>
      </div>
    </>
  );
};
Time.propTypes = {
  currentTime: PropTypes.number.isRequired,
  inList: PropTypes.bool,
};
Time.defaultProps = {
  currentTime: 0,
  inList: true,
};
