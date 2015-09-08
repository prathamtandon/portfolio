import React, { PropTypes } from 'react';
import styles from './ContactPage.less';
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
        <div className="ContactPage-container">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }

}

export default ContactPage;
