import React from 'react';
import styles from './Social.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Social {

  render() {
    return (
      <nav className='social'>
        <a className='linkedin' target='_blank' href='http://www.linkedin.com/in/prathamt'>
          <img src='./linkedin.png' className='icon'></img>
          <span>LinkedIn</span>
        </a>
        <a className='github' target='_blank' href='https://github.com/prthrokz'>
          <img src='./Github.png' className='icon'></img>
          <span>Github</span>
        </a>
        <a className='email' target='_blank' href='mailto:tandon.p@husky.neu.edu'>
          <img src='./gmail.png' className='icon'></img>
          <span>Email</span>
        </a>
      </nav>
    );
  }
}

export default Social;
