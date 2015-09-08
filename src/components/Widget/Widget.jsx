import React, { PropTypes } from 'react';
import styles from './Widget.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Widget extends React.Component {

  static propTypes = {
    displayImage: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  };

  render () {
    return (
      <a className='widget-link' href='#'>
        <img className='widget' src={this.props.displayImage} />
        <span>{this.props.displayName}</span>
      </a>
    );
  }
}
