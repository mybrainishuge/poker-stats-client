import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { enableAddPlayer, clearPlayer, setPlayer } from '../../common/action/creator.js';
import { Input, SearchItem, SearchItemsContainer } from '..';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => ({
  handleAddPlayer: () => dispatch(enableAddPlayer()),
  handleClearPlayer: () => dispatch(clearPlayer()),
  handleSetPlayer: player => dispatch(setPlayer(player)),
});

const getPlayer = (players, pid) => players.filter(({ id }) => id === +pid)[0];
class PlayerSearchBase extends Component {
  constructor() {
    super();
    this.state = { list: [], value: '' };
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
    this.props.handleClearPlayer();
  };

  handlePlayerClick = pid => {
    if (!pid) {
      // display add new player form
      this.props.handleAddPlayer();
    } else {
      // display update player winnings form
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
        this.setState({ value: `${player.first} ${player.last}` });
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
            <SearchItem key={id} pid={id} onClick={this.handlePlayerClick.bind(null, id)}>
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
