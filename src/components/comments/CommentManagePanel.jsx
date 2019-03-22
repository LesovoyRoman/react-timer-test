import React from 'react';
import PropTypes from 'prop-types';

export default function CommentManagePanel(props) {
  const { buttonClose, buttonEdit } = props;

  return (
    <div className="CommentManagePanel">
      {/* @todo add btns */}
    </div>
  );
}

/**
 * Prop types of Button Component
 * @type {{eventClick: *, classNames: *, styles: *, disabled: *, label: *}}
 */
CommentManagePanel.propTypes = {
  buttonClose: PropTypes.func,
  buttonEdit: PropTypes.func,
};
CommentManagePanel.defaultProps = {
  buttonClose: () => {},
  buttonEdit: () => {},
};
