import React, { PropTypes } from 'react';
import styles from './ContentPage.less';
import withStyles from '../../decorators/withStyles';
import Widget from '../Widget/Widget.jsx';

@withStyles(styles)
class ContentPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
          <div className='content-container'>
            <div dangerouslySetInnerHTML={{__html: this.props.content || ''}} />
          </div>
          <div className='widget-container'>
            <Widget widgetLink='/resume.pdf' displayName='Resume' displayImage='./resume.png' />
            <Widget widgetLink='https://github.com/prathamtandon' displayName='Work' displayImage='./programming.png' />
            <Widget widgetLink='/blog' displayName='Blog' displayImage='./thought.png' />
            <Widget widgetLink='/contact' displayName='Contact' displayImage='./send.png' />
          </div>
        </div>
      </div>
    );
  }

}

export default ContentPage;
