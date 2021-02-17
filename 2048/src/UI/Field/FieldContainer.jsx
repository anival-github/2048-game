/* eslint-disable react/prop-types */
import React from 'react';
import {
  Background, BackgroundCell, Field, Playground, PlayGroundCell,
} from './StyledComponents';

const FieldContainer = ({ cells }) => {
  const backgroundCells = Array.from(
    new Array(16),
    (elem, index) => <BackgroundCell key={index} />,
  );

  const playGroundCells = cells.map(({
    x, y, value, id,
  }) => (
    <PlayGroundCell key={id} x={x} y={y} value={value}>
      {value}
    </PlayGroundCell>
  ));

  return (
    <Field>
      <Background>
        {backgroundCells}
      </Background>
      <Playground>
        {playGroundCells}
        <PlayGroundCell />
      </Playground>
    </Field>
  );
};

export default FieldContainer;
