import React, { PropTypes } from 'react';

export default class Blog extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render () {
    let title = 'Blog';
    this.context.onSetTitle(title);
    return (
      <div></div>
    );
  }
}
