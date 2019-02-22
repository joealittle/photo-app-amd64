import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`;

const Picture = styled.picture`
    background-color: grey;
    display: block;
    position: relative;

    ${props => props.aspectRatio === 'default' && css`
        padding-top: 66%;
    `}

    ${props => props.aspectRatio === 'logo' && css`
        padding-top: calc(257 / 226 * 100%);
    `}
`;

const Image = (props) =>  (
    <Picture aspectRatio={props.aspectRatio ? props.aspectRatio : 'default'}>
        <Img src={props.src} alt={props.alt} />
    </Picture>
);

export default Image;
