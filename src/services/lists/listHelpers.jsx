import { setOption } from '../common/common';
import { ACTIVE_OPTION } from '../../components/lists/listsConfig';

/**
 * Can be added if list is empty or new value not the same as previous (in list)
 * @param payload
 * @returns {boolean}
 */
export const shouldBeAddedToList = (payload) => {
  const { currentTime, list } = { ...payload };

  return currentTime && (!list.length || currentTime !== [...list].shift().time);
};

/**
 * 1) Update list
 * 2) Remove 'active' option from each element
 * 3) Set active element
 * @param activeElement
 * @param list
 * @returns {T[]}
 */
export const rebuildList = (activeElement, list) => {
  const indexObject = list.indexOf(activeElement);
  /**
  * Update list
  * @type {T[]}
  */
  const newList = [...list.splice(indexObject, list.length)];
  /**
  * Remove active option
  */
  newList.map(e => setOption(e, ACTIVE_OPTION, false));
  /**
  * Set active element
  */
  setOption(activeElement, ACTIVE_OPTION, true);
  return newList;
};
