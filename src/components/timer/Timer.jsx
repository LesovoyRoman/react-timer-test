import React, { Component } from 'react';
import Button from '../buttons/Button';
import List from '../lists/List';
import { Time } from './partials/Time';
import { timerCounter } from '../../services/timer/timerCounter';
import PropTypes from 'prop-types';
import { EN, getTranslation, LANGUAGE_OPTIONS } from '../../languages/languages';
import { delayMilliseconds } from '../../services/timer/timerConfig';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Count current time in seconds
       */
      currentTime: 0,
      timerStatus: 0,
      isResetting: 0,
      lang: this.props.lang,
      setModalContent: this.props.setModalContent
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.lang) this.setState({ lang: nextProps.lang });
  }

  stopTimer() {
    this.setState({
      timerStatus: 0,
    });
  }

  startTimer() {
    this.setState({
      timerStatus: 1,
    }, () => this.goTimer());
  }

  /**
   * isResetting -> not allows to start timer again during reset
   * @returns {Promise<void>}
   */
  resetTimer() {
    this.setState({
      isResetting: 1,
      currentTime: 0,
      timerStatus: 0,
    }, () => {
      this.setState({
        isResetting: 0,
      });
    });
  }

  /**
   * Set current time in seconds
   */
  setTime = (seconds) => {
    this.setState({
      currentTime: seconds,
    });
  }

  goTimer(lostTime = 0) {
    let timeBefore = Date.now(); // Time before
    timerCounter(delayMilliseconds).then(() => {
      if(this.state.timerStatus) {
        this.setState({
          currentTime: this.state.currentTime + lostTime // Update time with time which was delayed (in seconds)
        }, () => this.goTimer((Date.now() - timeBefore) / 1000 )); // setState asynchronous function (we need to add time which we lost on setState) (in seconds)
      }
    });
  }

  render() {
    return (
      <div className="Timer">
        <Time
          currentTime={this.state.currentTime}
        />
        <Button
          label={!Boolean(this.state.timerStatus)
            ? getTranslation(this.state.lang, LANGUAGE_OPTIONS.START)
            : getTranslation(this.state.lang, LANGUAGE_OPTIONS.STOP)
          }
          disabled={Boolean(this.isResetting)}
          onClick={() => Boolean(this.state.timerStatus) ? this.stopTimer() : this.startTimer()}
        />
        <Button
          label={getTranslation(this.state.lang, LANGUAGE_OPTIONS.RESET)}
          onClick={() => this.resetTimer()}
          disabled={!Boolean(this.state.currentTime)}
        />
        <List
          currentTime={this.state.currentTime}
          btnAddToList={true}
          btnRemoveAll={true}
          setModalContent={content => this.state.setModalContent(content)}
          setTime={this.setTime}
          lang={this.state.lang}
        />
      </div>
    );
  }
}

Timer.propTypes = {
  lang: PropTypes.string,
  setModalContent: PropTypes.func,
};
Timer.defaultProps = {
  lang: EN,
  setModalContent: () => {},
};

export default Timer;
