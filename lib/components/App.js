import React, { Component }from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();
  }
  static childContextTypes = {
    store: PropTypes.object,
  };
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}

export default App;