import React from 'react';
import withRedux from '../src/withRedux';
import ContentPanel from './ContentPanel';

class IndexPage extends React.Component {
  render() {
    return (
      <ContentPanel {...this.props} />
    );
  }
}

export default withRedux(IndexPage);
