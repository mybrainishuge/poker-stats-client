import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPlayers } from './common/action/creator.js';
import { Container, EarningsTable, PageHeading } from './component';

const mapDispatchToProps = dispatch => ({
  handleGetPlayers: () => dispatch(getPlayers()),
});

export class AppBase extends Component {
  componentDidMount = () => this.props.handleGetPlayers();

  render() {
    return (
      <Container>
        <PageHeading>All-Time Tournament Earnings</PageHeading>
        <EarningsTable />
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
