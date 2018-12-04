import React from 'react';
import {
  AddPlayer,
  BackToStats,
  Message,
  PageHeading,
  PlayerSearch,
  UpdatePlayer,
} from '../component';

export const EditPlayer = () => (
  <>
    <PageHeading>Add / Modify Players</PageHeading>
    <BackToStats />
    <PlayerSearch />
    <UpdatePlayer />
    <AddPlayer />
    <Message />
  </>
);
