import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Navigation from '../Navigation';
import ProfileImage from '../ProfileImage/ProfileImage';
import Social from '../Social/Social';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <ProfileImage />
            <Social />
            <h3><a href='/' className="Header-bannerTitle">Pratham's Webspace</a></h3>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
