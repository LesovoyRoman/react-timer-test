import React from 'react';
import PropTypes from 'prop-types';
import { ACTIVE_OPTION } from './listsConfig';

/**
 * Render component of List
 * @param props
 * @returns {*}
 * @constructor
 */
export default function ListComponent(props) {
  const { updateList, list, classNames } = props;
  return (
    <ul className={`${classNames} custom-list`}>
      {list.map((e) =>
        <li key={e.time} className={e.active ? ACTIVE_OPTION : ''} onClick={() => updateList(e)}>
          <Time currentTime={e.time} inList={true} />
        </li>)}
    </ul>
  );
}

/**
 * Prop type of ListComponent
 * @type {{updateList: shim, list, classNames: shim}}
 */
ListComponent.propTypes = {
  updateList: PropTypes.func,
  list: PropTypes.instanceOf(Array),
  classNames: PropTypes.string,
};
ListComponent.defaultProps = {
  updateList: () => {},
  list: [],
  classNames: '',
};
