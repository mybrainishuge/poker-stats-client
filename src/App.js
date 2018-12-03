import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { getPlayers } from './common/action/creator.js';
import { Container } from './component';
import { Earnings, EditPlayer } from './page';

const mapDispatchToProps = dispatch => ({
  handleGetPlayers: () => dispatch(getPlayers()),
});

export class AppBase extends Component {
  componentDidMount = () => this.props.handleGetPlayers();

  render() {
    return (
      <Container>
        <Route path="/" exact={true} component={Earnings} />
        <Route path="/edit" component={EditPlayer} />
      </Container>
    );
  }
}

export const App = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AppBase)
);
