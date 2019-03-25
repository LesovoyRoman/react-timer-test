import React from 'react';
import PropTypes from 'prop-types';
import Time from '../timer/partials/Time';
import { ACTIVE_OPTION } from './listsConfig';
import { EN } from '../../languages/languages';

const propTypesComponent = {
  updateList: PropTypes.func,
  list: PropTypes.instanceOf(Array),
  classNames: PropTypes.string,
  lang: PropTypes.string,
  setModalContent: PropTypes.func,
};
const defaultPropsComponent = {
  updateList: () => {},
  list: [],
  classNames: '',
  lang: EN,
  setModalContent: () => {},
};

/**
 * Render component of List
 * @param props
 * @returns {*}
 * @constructor
 */
export default function ListComponent(props) {
  const { updateList, list, classNames, setModalContent } = props;
  const mapList = listToMap => (
    listToMap.map(e =>
      <li key={e.time} className={e.active ? ACTIVE_OPTION : ''}>
        <Time
          updateList={() => updateList(e)}
          currentTime={e.time}
          inList={true}
          lang={props.lang}
          setModalContent={content => setModalContent(content)}
        />
      </li>)
  );

  return (
    <ul className={`${classNames} custom-list`}>
      { mapList(list) }
    </ul>
  );
}

/**
 * Prop type of ListComponent
 * @type {{updateList: shim, list, classNames: shim}}
 */
ListComponent.propTypes = {
  ...propTypesComponent,
};
ListComponent.defaultProps = {
  ...defaultPropsComponent,
};
