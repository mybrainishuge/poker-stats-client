import React from 'react';
import { Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import { TableRowHeading, TitleSecondary } from '..';

export const TableHeading = () => (
  <MediaQuery minWidth={375}>
    <TableRowHeading>
      <Col xs={9} sm={6}>
        <TitleSecondary>
          Player<MediaQuery maxWidth={575}> / Winnings</MediaQuery>
        </TitleSecondary>
      </Col>
      <MediaQuery minWidth={576}>
        <Col xs={4}>
          <TitleSecondary>Winnings</TitleSecondary>
        </Col>
      </MediaQuery>
      <Col xs={3} sm={2}>
        <MediaQuery minWidth={375}>
          <TitleSecondary>Country</TitleSecondary>
        </MediaQuery>
      </Col>
    </TableRowHeading>
  </MediaQuery>
);
