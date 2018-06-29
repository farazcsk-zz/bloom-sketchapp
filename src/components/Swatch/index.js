import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import Specimen from '../Specimen';

const Root = styled.View`
  margin-top: 24px;
  margin-right: ${props => (props.index % 3 !== 2 ? '16px' : '0')};
`;

const Color = styled.View`
  background-color: ${props => props.color};
  width: 100%;
  height: 140px;
`;

const Swatch = ({ name, hex, rgb, variable, index }) => (
  <Root index={index}>
    <Specimen name={name} attributes={[hex, rgb, variable]} width={225} height={280}>
      <Color color={rgb} />
    </Specimen>
  </Root>
);

Swatch.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string,
  rgb: PropTypes.string,
  variable: PropTypes.string,
};

export default Swatch;
