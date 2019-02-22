import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Pica } from '../../styles/typography';

const ButtonStyle = css`
  apearance: none;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: normal;
  border: 2px solid #000000;
  margin: 0 5px;
  padding: 8px 40px;
  text-decoration: none;
  transition: background-color .2s ease, color .2s ease;
  ${Pica}

  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #000000;
    text-decoration: none;
  }
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`;

const Button = styled.button`
  ${ButtonStyle}
`;

export default Button;
