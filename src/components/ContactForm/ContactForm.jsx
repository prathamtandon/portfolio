import React from 'react';
import styles from './ContactForm.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let sender=`sender=${React.findDOMNode(this.refs.sender).value}`;
    let from=`from=${React.findDOMNode(this.refs.from).value}`;
    let text=`text=${React.findDOMNode(this.refs.text).value}`;
    let params=[sender,from,text].join('&');
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST','sendmail',true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.setRequestHeader("Content-length", params.length);
    xmlhttp.setRequestHeader("Connection", "close");
    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState == 4) {
        React.findDOMNode(this.refs.status).innerHTML = xmlhttp.response;
        React.findDOMNode(this.refs.sender).value = '';
        React.findDOMNode(this.refs.from).value = '';
        React.findDOMNode(this.refs.text).value = '';
        React.findDOMNode(this.refs.loading).style.display = 'none';
      }
    }
    React.findDOMNode(this.refs.loading).style.display = 'block';
    xmlhttp.send(params);
  }

  render() {
    return (
      <section className='main-ssp'>
        <div className='form-main'>
          <div className='form-div'>
            <h3 className='form-label'>Message Me!</h3>
            <h4 className='form-status' ref='status'></h4>
            <form className='form' onSubmit={this.handleFormSubmit}>
              <p className='name'>
                <input id='name' className='feedback-input' type='text' placeholder='Name' ref='sender' required/>
              </p>
              <p className='email'>
                <input id='email' className='feedback-input' type='email' placeholder='Email' ref='from' required/>
              </p>
              <p className='text'>
                <textarea id='comment' className='feedback-input' placeholder='Message' ref='text' required></textarea>
              </p>
              <div className='submit'>
                <input id='button-red' type='submit' value='SEND'/>
                <img style={{display: 'none'}} ref='loading' src='loader.gif'/>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

}

export default ContactForm;
