import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Button, EarningsTable, Link, PageHeading, Spacer } from '../component';

export const Earnings = () => (
  <>
    <PageHeading>All-Time Tournament Earnings</PageHeading>
    <EarningsTable />

    <Spacer height="1em" />

    <Row center="xs" middle="xs" end="md">
      <Col xs={12} sm={6} md={5} lg={4} xl={3}>
        <Link to="/edit">
          <Button>Add / Modify Players</Button>
        </Link>
      </Col>
    </Row>
  </>
);
