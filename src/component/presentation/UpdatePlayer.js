import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import { updatePlayer } from '../../common/action/creator.js';
import { Button, Form, Input } from '..';

const mapStateToProps = ({ addPlayer, player }) => ({ addPlayer, player });

const mapDispatchToProps = dispatch => ({
  handleUpdatePlayer: (id, value) => dispatch(updatePlayer(id, value)),
});

export class UpdatePlayerBase extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = +this.state.value;

    if (value) {
      this.props.handleUpdatePlayer(this.props.player.id, value);
    }
  };

  render() {
    const { addPlayer, player } = this.props;
    return (
      player &&
      !addPlayer && (
        <Form onSubmit={this.handleSubmit}>
          <Row center="xs" middle="xs">
            <Col xs={12} sm={9} md={8}>
              <Input
                onChange={this.handleChange}
                placeholder="Type new winnings..."
                value={this.state.value}
              />
            </Col>
            <Col xs={12} sm={3} md={2}>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      )
    );
  }
}

export const UpdatePlayer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdatePlayerBase)
);
