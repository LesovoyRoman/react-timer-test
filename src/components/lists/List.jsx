import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button';
import { shouldBeAddedToList, rebuildList } from '../../services/lists/listHelpers';
import ListComponent from './ListComponent';
import { getTranslation, EN, LANGUAGE_OPTIONS } from '../../languages/languages';

class List extends Component {
  constructor(props) {
  super(props);

    this.state = {
      currentTime: { ...this.props },
      list: this.props.list,
      /**
      * Should be rendered action btns
      */
      btnAddToList: { ...this.props },
      btnRemoveAll: { ...this.props },
      setTime: this.props.setTime,
      lang: this.props.lang
    };
  }

  /**
  * Set state with current time && current language
  * @param nextProps
  */
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTime) this.setState({ currentTime: nextProps.currentTime });
    if (nextProps.lang) this.setState({ lang: nextProps.lang });
  }

  /**
  * Update only when list is changed
  * @param _ (Props)
  * @param nextState
  * @returns {boolean}
  */
  shouldComponentUpdate(_, nextState) {
    return nextState.list !== { ...this.state };
  }

  addToList = (newTime) => {
    if(shouldBeAddedToList({ ...this.state }))
      this.setState({
        /**
        * Position of new object has influence on timerMiddleware
        */
        list: [ newTime, ...this.state.list ],
      });
  }

  /**
  * Remove elements until gets current time (which was clicked on)
  * @param object
  */
  updateList = (object) => {
    let updatedList = rebuildList(object, this.state.list);
    /**
    * Set time of object
    */
    this.state.setTime(object.time);
    /**
    * Update list
    */
    this.setState({
      list: updatedList,
    });
  }

  clearList() {
    this.setState({
      list: [],
    });
  }

  render() {
    return (
      <>
        { this.state.btnRemoveAll
          &&
          <Button
            onClick={() => this.clearList()}
            label={getTranslation(this.state.lang, LANGUAGE_OPTIONS.REMOVE)}
            disabled={!Boolean(this.state.list.length)}
          />
        }
        { this.state.btnAddToList
          &&
          <Button
            onClick={() => this.addToList({ time: this.state.currentTime })}
            label={getTranslation(this.state.lang, LANGUAGE_OPTIONS.SAVE)}
            disabled={!Boolean(this.props.currentTime)}
          />
        }
        <ListComponent
          updateList={this.updateList}
          classNames={this.props.classNames}
          list={this.state.list}
        />
      </>
    );
  }
}

List.propTypes = {
  list: PropTypes.instanceOf(Array),
  currentTime: PropTypes.number,
  btnAddToList: PropTypes.bool,
  btnRemoveAll: PropTypes.bool,
  classNames: PropTypes.string,
	setTime: PropTypes.func,
  lang: PropTypes.string,
};

List.defaultProps = {
  list: [],
  currentTime: 0,
  btnAddToList: false,
  btnRemoveAll: false,
  classNames: '',
  lang: EN,
	setTime: () => {},
};

export default List;
