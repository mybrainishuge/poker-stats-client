import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import { addPlayer, clearAddPlayer } from '../../common/action/creator.js';
import { Button, Form, Input } from '..';

const mapStateToProps = ({ addPlayer, player }) => ({ addPlayer, player });

const mapDispatchToProps = dispatch => ({
  handleAddPlayer: (id, value) => dispatch(addPlayer(id, value)),
  handleClearAddPlayer: () => dispatch(clearAddPlayer()),
});

export class AddPlayerBase extends Component {
  constructor() {
    super();
    this.state = { country: '', first: '', last: '', winnings: '' };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { country, first, last, winnings } = this.state;

    if (country && first && last && winnings) {
      this.props.handleAddPlayer({ country, first, last, winnings });
    }
  };

  componentWillUnmount = () => this.props.handleClearAddPlayer();

  render() {
    const { addPlayer, player } = this.props;
    const { country, first, last, winnings } = this.state;
    return (
      addPlayer &&
      !player && (
        <Form onSubmit={this.handleSubmit}>
          <Row center="xs" middle="xs">
            <Col xs={12} sm={6} lg={3} xl={2}>
              <Input
                onChange={this.handleChange}
                name="first"
                placeholder="First name"
                value={first}
              />
            </Col>
            <Col xs={12} sm={6} lg={3} xl={2}>
              <Input
                onChange={this.handleChange}
                name="last"
                placeholder="Last name"
                value={last}
              />
            </Col>
            <Col xs={12} sm={6} lg={3} xl={2}>
              <Input
                onChange={this.handleChange}
                name="winnings"
                placeholder="Winnings"
                value={winnings}
              />
            </Col>
            <Col xs={12} sm={6} lg={3} xl={2}>
              <Input
                onChange={this.handleChange}
                name="country"
                placeholder="Country"
                value={country}
              />
            </Col>
            <Col xs={12} sm={6} md={3} xl={2}>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      )
    );
  }
}

export const AddPlayer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddPlayerBase)
);
