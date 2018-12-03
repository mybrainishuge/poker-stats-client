import React from 'react';
import MediaQuery from 'react-responsive';
import { ColMiddle, color, Flag, Text } from '..';

export const ColCountry = ({ alpha2code, country }) => (
  <ColMiddle xs={3} sm={2}>
    <MediaQuery minWidth={375}>
      <Flag
        src="https://res.cloudinary.com/viz/image/upload/flag/blank.gif"
        className={`flag flag-${alpha2code.toLowerCase()}`}
        alt=""
      />
      <Text textColor={color.redDark}>{country}</Text>
    </MediaQuery>
  </ColMiddle>
);
