import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import { addPlayer, clearAddPlayer, getCountries } from '../../common/action/creator.js';
import { Button, Form, Input, SearchItem, SearchItemsContainer } from '..';

const mapStateToProps = ({ addPlayer, countries, player }) => ({ addPlayer, countries, player });

const mapDispatchToProps = dispatch => ({
  handleAddPlayer: (id, value) => dispatch(addPlayer(id, value)),
  handleClearAddPlayer: () => dispatch(clearAddPlayer()),
  handleGetCountries: () => dispatch(getCountries()),
});

const getCountry = (countries, cid) => countries.filter(({ id }) => id === +cid)[0];

export class AddPlayerBase extends Component {
  constructor() {
    super();
    this.state = { country: '', countryName: '', first: '', last: '', list: [], winnings: '' };
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

  handleCountryChange = e => {
    const { countries } = this.props;
    const { value } = e.target;

    let list = value
      ? countries
          .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
          .slice(0, 10)
      : [];

    this.setState({ list, countryName: value });
  };

  handleItemClick = cid => {
    const { id, name } = getCountry(this.props.countries, cid);
    this.setState({ list: [], country: id, countryName: name });
  };

  componentDidMount = () => {
    if (!this.props.countries) {
      this.props.handleGetCountries();
    }
  };

  componentWillUnmount = () => this.props.handleClearAddPlayer();

  render() {
    const { addPlayer, player } = this.props;
    const { countryName, first, last, list, winnings } = this.state;

    return (
      addPlayer &&
      !player && (
        <Form onSubmit={this.handleSubmit}>
          <Row center="xs">
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
                onChange={this.handleCountryChange}
                name="country"
                placeholder="Country"
                value={countryName}
              />
              <SearchItemsContainer hide={!list.length}>
                {list.map(({ id, name }) => (
                  <SearchItem key={id} onClick={this.handleItemClick.bind(null, id)}>
                    {name}
                  </SearchItem>
                ))}
              </SearchItemsContainer>
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
