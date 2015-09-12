import React, { PropTypes } from 'react';
import styles from './ContactPage.less';
import HorizontalNav from '../HorizontalNav/HorizontalNav';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Contact';
    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <HorizontalNav />
      </div>
    );
  }

}

export default ContactPage;
