import React, { Component } from 'react';
import axios from 'axios';
import { Container, EarningsTable, PageHeading } from './component';

export class App extends Component {
  constructor() {
    super();
    this.state = { players: [] };
  }

  componentDidMount = async () => {
    const { data } = await axios.get('http://localhost:3333/players');
    this.setState({ players: data });
  };

  render() {
    return (
      <Container>
        <PageHeading>All-Time Tournament Earnings</PageHeading>
        <EarningsTable players={this.state.players} />
      </Container>
    );
  }
}
