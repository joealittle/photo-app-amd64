import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  display: none;
`;

const SVGSprite = () => (
  <SVG version="1.1" xmlns="https://www.w3.org/2000/svg">
    <symbol id="chevron--left" viewBox="0 0 20 23">
      <polygon fill="currentColor" points=".08 .66 .08 6.736 8.83 11.802 .08 16.866 .08 22.945 19.33 11.802 19.33 11.8" transform="matrix(-1 0 0 1 19.41 0)"/>
    </symbol>
    <symbol id="chevron--right" viewBox="0 0 20 23">
      <polygon fill="currentColor" points=".08 .66 .08 6.736 8.83 11.802 .08 16.866 .08 22.945 19.33 11.802 19.33 11.8"/>
    </symbol>
  </SVG>
);

export default SVGSprite;
