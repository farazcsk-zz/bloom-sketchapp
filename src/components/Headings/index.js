import styled from 'styled-components/primitives';

import { fontAvenir, fontWeightDemi, fontSizeLargeIv, fontSizeLargeIii } from '../../styles/typography';
import { colorBlack } from '../../styles/colors';
import { sizeLgIii } from '../../styles/modifiers';

export const H1 = styled.Text`
  font-family: ${fontAvenir};
  font-weight: ${fontWeightDemi};
  font-size: ${fontSizeLargeIv};
  color: ${colorBlack};
`;

export const H2 = styled.Text`
  font-family: ${fontAvenir};
  font-weight: ${fontWeightDemi};
  font-size: ${fontSizeLargeIii};
  color: ${colorBlack};
  margin-top: ${sizeLgIii};
`;
