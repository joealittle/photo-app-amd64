import styled, { css } from 'styled-components';

import { Trafalgar, Paragon, DoublePica, Canon } from '../../styles/typography';


const Heading = css`
  color: ${props => props.theme.colours.body }
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  ${Canon}
  ${Heading}
`;

export const H2 = styled.h2`
  ${Trafalgar}
  ${Heading}
`;

export const H3 = styled.h3`
  ${Paragon}
  ${Heading}
`;

export const H4 = styled.h4`
  ${DoublePica}
  ${Heading}
`;

