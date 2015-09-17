import React, { PropTypes } from 'react';
import styles from './HorizontalNav.css';
import withStyles from '../../decorators/withStyles';
import Social from '../Social/Social';

@withStyles(styles)
export default class HorizontalNav extends React.Component {

  static propTypes = {
    selected: PropTypes.string.isRequired
  };

  render() {
    return (
      <section className='home'>
        <header className='nav-header'>
          <hgroup className='main'>
            <a href='/'>
              <h1 className='title-font'>Pratham Tandon</h1>
            </a>
          </hgroup>
          <nav className='bar'>
            <a className='resume' href='/resume.pdf'>
              <span>Resume</span>
            </a>
            <a className='work' href='https://github.com/prthrokz'>
              <span>Work</span>
            </a>
            <a className='blog' href='/#'>
              <span className={this.props.selected === 'blog' ? 'selected' : ''}>Blog</span>
            </a>
            <a className='contact' href='/contact'>
              <span className={this.props.selected === 'contact' ? 'selected' : ''}>Contact</span>
            </a>
          </nav>
          <Social />
        </header>
      </section>
    )
  }
}
