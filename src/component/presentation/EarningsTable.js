import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import { ColCountry, ColPlayer, Link, TableHeading, TableRowData } from '..';

const mapStateToProps = ({ players }) => ({ players });

export const EarningsTableBase = ({ players }) => (
  <>
    <TableHeading />
    {players.map(({ alpha2code, avatar, country, first, id, last, winnings }, i) => (
      <Link to={`/edit?pid=${id}`} key={id}>
        <TableRowData middle="xs">
          <ColPlayer avatar={avatar} first={first} last={last} rank={i + 1} winnings={winnings} />

          <MediaQuery minWidth={576}>
            <Col xs={4}>{winnings}</Col>
          </MediaQuery>

          <ColCountry alpha2code={alpha2code} country={country} />
        </TableRowData>
      </Link>
    ))}
  </>
);

export const EarningsTable = withRouter(connect(mapStateToProps)(EarningsTableBase));
