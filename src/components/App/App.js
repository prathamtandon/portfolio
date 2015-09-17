import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import ContentPage from '../ContentPage';
import ContactPage from '../ContactPage';
import NotFoundPage from '../NotFoundPage';
import HorizontalNav from '../HorizontalNav/HorizontalNav';
import Blog from '../Blog/Blog.js';

let React = require('react');

const pages = { ContentPage, ContactPage, NotFoundPage };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: React.PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;
    let jsx;

    switch (this.props.path) {

      case '/':
        let page = AppStore.getPage(this.props.path);
        component = React.createElement(pages[page.component], page);
        jsx =
          <div>
            <Header />
            {component}
          </div>;
        break;

      case '/contact':
        component = <ContactPage />;
        jsx =
          <div>
            <HorizontalNav selected='contact' />
            {component}
          </div>;
        break;

      case '/blog':
        component = <Blog />;
        jsx =
          <div>
            <HorizontalNav selected='blog' />
            {component}
          </div>;
        break;

      default:
         jsx = <NotFoundPage />;
    }
    return jsx;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;
