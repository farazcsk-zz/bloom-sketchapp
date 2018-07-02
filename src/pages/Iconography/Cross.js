import * as React from 'react';
import { Svg } from 'react-sketchapp';

const Cross = () => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Svg.G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <Svg.G id="icon-x" fill="#191919">
        <Svg.Path
          d="M9,7 L9,1 L7,1 L7,7 L1,7 L1,9 L7,9 L7,15 L9,15 L9,9 L15,9 L15,7 L9,7 Z"
          id="Combined-Shape"
          transform="translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) "
        />
      </Svg.G>
    </Svg.G>
  </Svg>
);

export default Cross;
