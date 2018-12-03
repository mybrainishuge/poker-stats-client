import React from 'react';
import { Row } from 'react-flexbox-grid';
import { BackButton, Link, TitleSecondary } from '..';

export const BackToStats = () => (
  <Row center="xs">
    <BackButton>
      <Link to="/">
        <TitleSecondary>Back to Stats</TitleSecondary>
      </Link>
    </BackButton>
  </Row>
);
