import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import { Avatar, ColMiddle, color, Text } from '..';

export const ColPlayer = ({ avatar, first, last, rank, winnings }) => (
  <ColMiddle xs={9} sm={6}>
    {rank}.
    <Avatar alt={`${first} ${last}`} src={avatar} />
    <MediaQuery minWidth={576}>
      <Text textColor={color.redDark}>
        {first} {last}
      </Text>
    </MediaQuery>
    <MediaQuery maxWidth={575}>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Text textColor={color.redDark}>
              {first} {last}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>{winnings}</Col>
        </Row>
      </Grid>
    </MediaQuery>
  </ColMiddle>
);
