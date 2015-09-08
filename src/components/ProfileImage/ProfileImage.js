import React from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ProfileImage.css';

@withStyles(styles)
export default class ProfileImage extends React.Component {
  render () {
    return <div className='circular'></div>;
  }
}
