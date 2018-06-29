import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

const Root = styled.View`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
`;

const Header = styled.View`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const Body = styled.View`
  border-left: none;
  border-right: none;
  border-bottom: none;
  text-align: left;
  padding: 16px;
`;

const Divider = styled.View`
  width: ${props => props.width - 1};
  height: 1px
  background-color: #dddddd;
`;

const Name = styled.Text`
  font-family: Avenir Next;
  font-weight: 600;
  font-size: 16px;
  color: #191919;
`;

const Attributes = styled.View`
  margin-top: 4px;
`;

const Attribute = styled.Text`
  color: #8b8b8b;
  font-size: 14px;
  font-family: Fira Mono;
`;

const Specimen = ({ children, attributes, name, width, height, marginTop }) => {
  return (
    <Root width={width} height={height} marginTop={marginTop}>
      <Header>{children}</Header>
      <Divider width={width} />
      <Body>
        <Name>{name}</Name>
        <Attributes>
          {attributes.map((attribute, i) => <Attribute key={i}>{attribute}</Attribute>)}
        </Attributes>
      </Body>
    </Root>
  );
};

Specimen.propTypes = {
  attributes: PropTypes.array,
};

Specimen.defaultProps = {
  attributes: [],
};

export default Specimen;
