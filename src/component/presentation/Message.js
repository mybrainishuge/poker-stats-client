import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import { Spacer, TitleSecondary } from '..';

const mapStateToProps = ({ message }) => ({ message });

export const MessageBase = ({ message }) =>
  message && (
    <Row center="xs" middle="xs">
      <Col>
        <Spacer height="1em" />
        <TitleSecondary>{message}</TitleSecondary>
        <Spacer height="1em" />
      </Col>
    </Row>
  );

export const Message = withRouter(connect(mapStateToProps)(MessageBase));
