import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View } from 'react-sketchapp';
import styled from 'styled-components/primitives';

import { H1, H2 } from '../../components/Headings';
import Swatch from '../../components/Swatch';

import { brand, greys, ui } from './swatches';

import { sizeLgVii } from '../../styles/modifiers';

const Body = styled.View`
  max-width: ${sizeLgVii * 4};
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
`;

const Colors = () => (
  <View>
    <H1>Colors</H1>
    <Body>
      <H2>Brand</H2>
      <Container>
        {brand.map((color, index) => (
          <Swatch
            key={color.id}
            index={index}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
            variable={color.variable}
          />
        ))}
      </Container>

      <H2>Greys</H2>
      <Container>
        {greys.map((color, index) => (
          <Swatch
            key={color.id}
            index={index}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
            variable={color.variable}
          />
        ))}
      </Container>

      <H2>UI</H2>
      <Container>
        {ui.map((color, index) => (
          <Swatch
            key={color.id}
            index={index}
            name={color.name}
            hex={color.hex}
            rgb={color.rgb}
            variable={color.variable}
          />
        ))}
      </Container>
    </Body>
  </View>
);

export default Colors;
