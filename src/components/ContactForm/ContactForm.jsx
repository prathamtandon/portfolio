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
            <form className='form'>
              <p className='name'>
                <input id='name' className='feedback-input' type='text' placeholder='Name' name='name' required/>
              </p>
              <p className='email'>
                <input id='email' className='feedback-input' type='email' placeholder='Email' name='email' required/>
              </p>
              <p className='text'>
                <textarea id='comment' className='feedback-input' placeholder='Message' name='text'></textarea>
              </p>
              <div className='submit'>
                <input id='button-red' type='submit' value='SEND'/>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

}

export default ContactForm;
