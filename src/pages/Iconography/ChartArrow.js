import * as React from 'react';
import { Svg } from 'react-sketchapp';

const ChartArrow = () => (
  <Svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <Svg.Path
      id="chartarrow"
      d="M14.62,7.75V3.42L9.31,10,6.84,6.83,1.38,12.61"
      fill="none"
      stroke="#191919"
    />
    <Svg.Line x1="14.6" y1="3.41" x2="10.27" y2="3.41" fill="none" stroke="#191919" />
    <Svg.Path
      id="chartarrow-2"
      data-name="chartarrow"
      d="M10.27,3.41m4.33,0"
      fill="none"
      stroke="none"
    />
  </Svg>
);

export default ChartArrow;
