import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {
  enableAddPlayer,
  clearAddPlayer,
  clearPlayer,
  setPlayer,
} from '../../common/action/creator.js';
import { Input, SearchItem, SearchItemsContainer } from '..';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => ({
  handleAddPlayer: () => dispatch(enableAddPlayer()),
  handleClearAddPlayer: () => dispatch(clearAddPlayer()),
  handleClearPlayer: () => dispatch(clearPlayer()),
  handleSetPlayer: player => dispatch(setPlayer(player)),
});

const getPlayer = (players, pid) => players.filter(({ id }) => id === +pid)[0];

class PlayerSearchBase extends Component {
  constructor() {
    super();
    this.state = { list: [{ id: 0, first: 'Add', last: 'user...' }], value: '' };
  }

  handleChange = e => {
    const { players } = this.props;
    const { value } = e.target;

    let list = value
      ? players
          .filter(({ first, last }) =>
            `${first} ${last}`.toLowerCase().includes(value.toLowerCase())
          )
          .slice(0, 10)
      : [];

    if (!list.length) {
      list = [{ id: 0, first: 'Add', last: 'user...' }];
    }

    this.setState({ list, value });
    this.props.handleClearAddPlayer();
    this.props.handleClearPlayer();
  };

  handleItemClick = pid => {
    if (!pid) {
      this.props.handleAddPlayer();
    } else {
      const player = getPlayer(this.props.players, pid);
      this.setState({ list: [], value: `${player.first} ${player.last}` });
      this.props.handleSetPlayer(player);
    }
  };

  componentDidMount = () => {
    const { players } = this.props;
    const { pid } = queryString.parse(this.props.location.search);
    if (pid) {
      const player = getPlayer(players, pid);
      if (player) {
        this.setState({ list: [], value: `${player.first} ${player.last}` });
        this.props.handleSetPlayer(player);
      }
    }
  };

  componentWillUnmount = () => this.props.handleClearPlayer();

  render() {
    const { list } = this.state;

    return (
      <>
        <Input
          listVisible={!!list.length}
          onChange={this.handleChange}
          placeholder="Type player name..."
          value={this.state.value}
        />
        <SearchItemsContainer hide={!list.length}>
          {list.map(({ id, first, last }) => (
            <SearchItem key={id} onClick={this.handleItemClick.bind(null, id)}>
              {first} {last}
            </SearchItem>
          ))}
        </SearchItemsContainer>
      </>
    );
  }
}

export const PlayerSearch = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerSearchBase)
);
