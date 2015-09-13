import React from 'react';
import styles from './ContactForm.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactForm extends React.Component {

  render() {
    return (
      <section className='main-ssp'>
        <div className='form-main'>
          <div className='form-div'>
            <h3 className='form-label'>Message Me!</h3>
          </div>
        </div>
      </section>
    );
  }

}

export default ContactForm;
