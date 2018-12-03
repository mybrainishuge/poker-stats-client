import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { TitlePrimary } from '..';

export const PageHeading = ({ children }) => (
  <Row center="xs">
    <Col>
      <TitlePrimary>{children}</TitlePrimary>
    </Col>
  </Row>
);
