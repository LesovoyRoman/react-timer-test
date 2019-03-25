import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../buttons/Button';
import Comment from './../../comments/Comment';
import { secondsToHms } from '../../../services/timer/timerCounter';
import { getTranslation, LANGUAGE_OPTIONS, EN } from '../../../languages/languages';

export const Time = (props) => {
  /**
  * Time vars
  */
  const { h, m, s, ms } = secondsToHms(props.currentTime);
  const [comment, setComment] = useState('');
  const { lang, setModalContent, updateList } = { ...props };
  const CommentRender = () => (
    <Comment
      lang={lang}
      onChange={(updatedComment) => { setComment(updatedComment); }}
      comment={comment}
    />
  );
  const CommentBtnStyles = {
    fontSize: '10px',
    height: 'auto',
    minWidth: 'auto',
    float: 'right',
  };
  const ButtonCallModal = (
    <Button
      onClick={() => setModalContent(CommentRender)}
      styles={CommentBtnStyles}
      label={getTranslation(lang, LANGUAGE_OPTIONS.COMMENT)}
    />
  );

  return (
    <>
      { props.inList && ButtonCallModal }

      <div className={`${props.inList ? 'clockList' : ''} clock`} onClick={updateList}>
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
  lang: PropTypes.string,
  updateList: PropTypes.func,
};
Time.defaultProps = {
  currentTime: 0,
  inList: false,
  lang: EN,
  updateList: () => {},
};
