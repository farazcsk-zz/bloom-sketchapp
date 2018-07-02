import * as React from 'react';
import { Svg } from 'react-sketchapp';

const Calendar = () => (
  <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <Svg.Rect x="1" y="3" width="14" height="12" fill="none" stroke="#191919" />
    <Svg.Line x1="12" y1="1" x2="12" y2="6" stroke="#191919" />
    <Svg.Line x1="4" y1="1" x2="4" y2="6" stroke="#191919" />
  </Svg>
);

export default Calendar;
