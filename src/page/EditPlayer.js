import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddPlayer, BackToStats, PageHeading, PlayerSearch, UpdatePlayer } from '../component';

const mapStateToProps = ({ player }) => ({ player });

export const EditPlayerBase = ({ player }) => (
  <>
    <PageHeading>Add / Modify Players</PageHeading>
    <BackToStats />
    <PlayerSearch />
    <UpdatePlayer />
    <AddPlayer />
  </>
);

export const EditPlayer = withRouter(connect(mapStateToProps)(EditPlayerBase));
