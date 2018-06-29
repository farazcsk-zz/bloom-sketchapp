import * as React from 'react';
import { View } from 'react-sketchapp';
import styled from 'styled-components/primitives';

import { H1, H2 } from '../../components/Headings';
import Specimen from '../../components/Specimen';

import { sizeLgI, sizeLgVii } from '../../styles/modifiers';
import { colorBlack } from '../../styles/colors';
import {
  fontAvenir,
  fontSizeSmallIi,
  fontSizeSmallI,
  fontSizeRegular,
  fontSizeLargeI,
  fontSizeLargeIi,
  fontSizeLargeIii,
  fontSizeLargeIv,
  fontSizeLargeV,
  fontWeightRegular,
  fontWeightDemi,
  fontWeightBold,
} from '../../styles/typography';

const Body = styled.View`
  max-width: ${sizeLgVii * 5};
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-between;
`;

const SpecimenContent = styled.View`
  height: 165;
  padding-left: ${sizeLgI};
  padding-right: ${sizeLgI};
  display: flex;
  justify-content: center;
`;

const FontFamilyText = styled.Text`
  font-family: ${fontAvenir};
  font-size: ${fontSizeLargeI};
  color: ${colorBlack};
`;

const FontSizeText = styled.Text`
  font-family: ${fontAvenir};
  font-size: ${props => props.fontSize};
  color: ${colorBlack};
`;

const FontWeightText = styled.Text`
  font-family: ${fontAvenir};
  font-size: ${fontSizeLargeV};
  font-weight: ${props => props.fontWeight};
  color: ${colorBlack};
`;

const Typography = () => (
  <View>
    <H1>Typography</H1>
    <Body>
      <H2>Font Family</H2>
      <Container>
        <Specimen name="Avenir Next" width={1000} height={223}>
          <SpecimenContent>
            <View>
              <FontFamilyText>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</FontFamilyText>
              <FontFamilyText>a b c d e f g h i j k l m n o p q r s t u v w x y z</FontFamilyText>
              <FontFamilyText>0 1 2 3 4 5 6 7 8 9 0</FontFamilyText>
            </View>
          </SpecimenContent>
        </Specimen>
      </Container>

      <H2>Font Sizes</H2>
      <Container>
        <Specimen
          name="Large V"
          attributes={['2.75rem / 44px', '--fontsize-large-v']}
          width={1000}
          height={280}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeLargeV}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>
        <Specimen
          name="Large Iv"
          attributes={['2rem / 32px', '--fontsize-large-iv']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeLargeIv}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>

        <Specimen
          name="Large Iii"
          attributes={['1.75rem / 28px', '--fontsize-large-iii']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeLargeIii}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>

        <Specimen
          name="Large Ii"
          attributes={['1.5rem / 24px', '--fontsize-large-ii']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeLargeIi}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>
        <Specimen
          name="Large I"
          attributes={['1.1875rem / 19px', '--fontsize-large-i']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeLargeI}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>
        <Specimen
          name="Regular"
          attributes={['1rem / 16px', '--fontsize-regular']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeRegular}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>
        <Specimen
          name="Small I"
          attributes={['0.875rem / 14px', '--fontsize-small-i']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeSmallI}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>
        <Specimen
          name="Small Ii"
          attributes={['0.6875rem / 11px', '--fontsize-small-ii']}
          width={1000}
          height={280}
          marginTop={sizeLgI}
        >
          <SpecimenContent>
            <FontSizeText fontSize={fontSizeSmallIi}>
              We started with a little store for the Queen
            </FontSizeText>
          </SpecimenContent>
        </Specimen>
      </Container>

      <H2>Font Weights</H2>
      <Container>
        <Specimen name="Regular" attributes={['--fontweight-regular']} width={224} height={244}>
          <SpecimenContent>
            <FontWeightText fontWeight={fontWeightRegular}>Aa</FontWeightText>
          </SpecimenContent>
        </Specimen>
        <Specimen name="Demi" attributes={['--fontweight-demi']} width={224} height={244}>
          <SpecimenContent>
            <FontWeightText fontWeight={fontWeightDemi}>Aa</FontWeightText>
          </SpecimenContent>
        </Specimen>
        <Specimen name="Bold" attributes={['--fontweight-bold']} width={224} height={244}>
          <SpecimenContent>
            <FontWeightText fontWeight={fontWeightBold}>Aa</FontWeightText>
          </SpecimenContent>
        </Specimen>
      </Container>
    </Body>
  </View>
);

export default Typography;
