import * as React from 'react';
import { Svg } from 'react-sketchapp';

const Chevron = () => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Svg.G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <Svg.G id="Chevron-up" fill="#000000">
        <Svg.Polygon
          id="Right-Arrow"
          transform="translate(8.000000, 8.000000) rotate(-90.000000) translate(-8.000000, -8.000000) "
          points="4.89189189 0 3 1.86666667 9.21621622 8 3 14.1333333 4.89189189 16 13 8"
        />
      </Svg.G>
    </Svg.G>
  </Svg>
);

export default Chevron;
