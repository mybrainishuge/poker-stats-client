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
        <Row>
          <Col xs={6}>Player</Col>
          <Col xs={3}>Winnings</Col>
          <Col xs={3}>Country</Col>
        </Row>
        {this.state.players.map(({ alpha2code, avatar, country, first, id, last, winnings }) => (
          <Row key={id} middle="xs">
            <Col xs={3}>
              <img alt={`${first} ${last}`} src={avatar} />
            </Col>
            <Col xs={3}>
              {first} {last}
            </Col>
            <Col xs={3}>{winnings}</Col>
            <Col xs={3}>
              <img
                src="https://res.cloudinary.com/viz/image/upload/flag/blank.gif"
                className={`flag flag-${alpha2code.toLowerCase()}`}
                alt=""
              />
              {country}
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}
