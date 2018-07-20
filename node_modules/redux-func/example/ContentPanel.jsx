import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import {
  withRouter
} from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as ActionTypes from './actions';

export const BasicExample = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
Topics.propTypes = {
  match: PropTypes.object
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
Topic.propTypes = {
  match: PropTypes.object
}

class ContentPanel extends React.Component {
  static propTypes = {
    sum: PropTypes.number,
    onPlus: PropTypes.func,
    onMinus: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let props = this.props;
    return (
      <div>
        <h1>ContentPanel - <small>{this.state.counter}</small></h1>
        <hr/>
          sum = {this.props.sum}
          &nbsp;
          <button onClick={this.props.onPlus}>+</button>
          &nbsp;
          <button onClick={this.props.onMinus}>-</button>
        <hr/>
        <ul>
          {_.map(props, (v, k) =>
            <li key={k}>{k} = {JSON.stringify(v)}</li>
          )}
        </ul>
        <hr/>
        <BasicExample />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sum: state.sum
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPlus: () => {
      dispatch({
        type: ActionTypes.COUNTER_PLUS
      });
    },
    onMinus: () => {
      dispatch({
        type: ActionTypes.COUNTER_MINUS
      });
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentPanel));
