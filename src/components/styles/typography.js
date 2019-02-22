import { css } from 'styled-components';

// Reference to font styles: http://www.bbc.co.uk/gel/guidelines/typography

function emify(px) {
  return `${px / 16}em`;
}

// hero title size
export const Canon = css`
  font-size: ${ emify(40) };
  line-height: ${ 48 / 40 };
`;

// Article title section header
export const Trafalgar = css`
  font-size: ${ emify(32) };
  line-height: ${ 40 / 32};
`;

// Primary headline
export const Paragon = css`
  font-size: ${ emify(28) };
  line-height: ${ 32 / 28 };
`;

// sub header
export const DoublePica = css`
  font-size: ${ emify(24) };
  line-height: ${ 30 / 24 };
`;

// text
export const BodyCopy = css`
  font-size: ${ emify(18) };
  line-height: ${ 24 / 18 };
`;

// links
export const Pica = css`
  font-size: ${ emify(18) };
  line-height: ${ 22 / 18 };
`;

export const Tiny = css`
  font-size: ${ emify(15) };
  line-height: ${ 18 / 15 };
`;
