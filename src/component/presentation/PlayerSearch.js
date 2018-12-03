import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Input, SearchItem, SearchItemsContainer } from '..';

const mapStateToProps = ({ players }) => ({ players });

const getPlayer = (players, pid) => players.filter(({ id }) => id === +pid)[0];

class PlayerSearchBase extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      player: null,
      value: '',
    };
  }

  handleChange = e => {
    const { players } = this.props;
    const { value } = e.target;

    const list = value
      ? players
          .filter(({ first, last }) =>
            `${first} ${last}`.toLowerCase().includes(value.toLowerCase())
          )
          .slice(0, 10)
      : [];

    this.setState({ list, player: null, value });
  };

  handlePlayerClick = pid => {
    const { players } = this.props;
    const player = getPlayer(players, pid);
    this.setState({ list: [], player, value: `${player.first} ${player.last}` });
  };

  componentDidMount() {
    const { players } = this.props;
    const { pid } = queryString.parse(this.props.location.search);
    if (pid) {
      const player = getPlayer(players, pid);
      if (player) {
        this.setState({ player, value: `${player.first} ${player.last}` });
      }
    }
  }

  render() {
    const { list, player, value } = this.state;

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
        {!player && value && !list.length && 'add new player?'}
        {player && <div>edit player</div>}
      </>
    );
  }
}

export const PlayerSearch = withRouter(connect(mapStateToProps)(PlayerSearchBase));
