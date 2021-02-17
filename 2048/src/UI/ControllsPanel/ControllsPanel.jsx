/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import { setInitialCells } from '../../redux/field-reducer';
import Container from './Container';

const ControllsPanel = (props) => (
  <Container>
    <Button onClick={props.setInitialCells}>Start game</Button>
  </Container>
);

export default connect(null, { setInitialCells })(ControllsPanel);
