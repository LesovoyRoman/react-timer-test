import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../buttons/Button';
import Comment from './../../comments/Comment';
import { secondsToHms } from '../../../services/timer/timerCounter';
import { getTranslation, LANGUAGE_OPTIONS, EN } from '../../../languages/languages';

const propTypesComponent = {
  currentTime: PropTypes.number.isRequired,
  inList: PropTypes.bool,
  lang: PropTypes.string,
  updateList: PropTypes.func,
};

const defaultPropsComponent = {
  currentTime: 0,
  inList: false,
  lang: EN,
  updateList: () => {},
};

export default class Time extends Component {
  /**
  * Time vars
  */
  state = { ...secondsToHms(this.props.currentTime), ...this.props, comment: '' };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTime) this.setState({ ...secondsToHms(this.props.currentTime) });
  }

  render() {
    let classNamePlaceholder = 'placeholder';
    let classNameNumbers = 'numbers';
    let classNameColon = 'colon';

    const CommentRender = () => (
      <Comment
        lang={this.state.lang}
        onChange={updatedComment => this.setState({
          comment: updatedComment
        }, () => this.state.setModalContent(CommentRender))}
        comment={this.state.comment}
      />
    );

    const ButtonCallModal = (
      <Button
        onClick={() => this.state.setModalContent(CommentRender)}
        classNames="comment-button"
        label={getTranslation(this.state.lang, LANGUAGE_OPTIONS.COMMENT)}
      />
    );

    return (
      <>
        { this.props.inList && ButtonCallModal }

        <div className={`${this.props.inList ? 'clockList' : ''} clock`} onClick={this.state.updateList}>
          <div className={classNameNumbers}>
            <p className="hours">{ this.state.h }</p>
            <p className={classNamePlaceholder}>88</p>
          </div>
          <div className={classNameColon}>
            <p>:</p>
          </div>
          <div className={classNameNumbers}>
            <p className="minutes">{ this.state.m }</p>
            <p className={classNamePlaceholder}>88</p>
          </div>
          <div className={classNameColon}>
            <p>:</p>
          </div>
          <div className={classNameNumbers}>
            <p className="seconds">{ this.state.s }</p>
            <p className={classNamePlaceholder}>88</p>
          </div>
          <div className={classNameColon}>
            <p>:</p>
          </div>
          <div className={classNameNumbers}>
            <p className="milliseconds">{ this.state.ms }</p>
            <p className={classNamePlaceholder}>88</p>
          </div>
        </div>
      </>
    );
  }
};
Time.propTypes = {
  ...propTypesComponent,
};
Time.defaultProps = {
  ...defaultPropsComponent,
};
