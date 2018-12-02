import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-flexbox-grid';

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
      <div>
        {this.state.players.map(({ avatar, country, first, id, last, winnings }) => (
          <Row key={id}>
            <Col xs={3}>
              <img alt={`${first} ${last}}`} src={avatar} />
            </Col>
            <Col xs={3}>
              {first} {last}
            </Col>
            <Col xs={3}>{winnings}</Col>
            <Col xs={3}>{country}</Col>
          </Row>
        ))}
      </div>
    );
  }
}
