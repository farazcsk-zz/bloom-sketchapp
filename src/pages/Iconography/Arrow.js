import * as React from 'react';
import { Svg } from 'react-sketchapp';

const Arrow = () => (
  <Svg viewBox="0 0 16 16" width="16" height="16">
    <Svg.Line x1="13.17" y1="7.97" x2="2.83" y2="8.03" stroke="#191919" />
    <Svg.Polyline points="10.48 5.25 13.23 8 10.48 10.75" />
  </Svg>
);

export default Arrow;
