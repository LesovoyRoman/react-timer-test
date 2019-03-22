import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managePanel: { ...this.props },
      styles: { ...this.props },
      classNames: { ...this.props },
      text: { ...this.props },
    };
  }

  render() {
    return (
      <div className="Comment">
        {/* @todo add comment body & CommentManagePanel */}
      </div>
    );
  }
}

/**
 * Prop types of Comment Component
 * @type {{classNames: shim, styles, text: shim}}
 */
Comment.propTypes = {
  classNames: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  text: PropTypes.string,
};
Comment.defaultProps = {
  classNames: '',
  styles: {},
  text: '',
};
