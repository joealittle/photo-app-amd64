import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  display: inline-block;
  width: 100%;
`;

const Logo = props => (
  <SVG viewBox="0 0 301 335">
  <defs>
      <style>
        {'.prefix__cls-4{fill:#fff}.prefix__cls-9{fill-rule:evenodd}'}
      </style>
      <linearGradient
        id="prefix__linear-gradient"
        x1={153.5}
        y1={31.18}
        x2={156.15}
        y2={320.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor={props.startColor} />
        <stop offset={1} stopColor={props.stopColor} />
      </linearGradient>
      <radialGradient
        id="prefix__inner_gradient"
        cx={154.81}
        cy={173.54}
        r={110.73}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.63} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>

      <filter id="shadow">
        <feDropShadow dx="1" dy="1" stdDeviation="12" floodOpacity={0.5}/>
      </filter>
    </defs>
    <title>BBC Box Logo</title>
    <g
      style={{
        isolation: 'isolate',
      }}
    >
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <path
            fillRule="evenodd"
            fill="#fff"
            d="M34.83 242.57V104.44l119.98-69.05 119.97 69.05v138.13l-119.97 69.05-119.98-69.05z"
          />
          <path
            className="prefix__cls-4"
            d="M154.81 40l116 66.75v133.5l-116 66.75-116-66.75v-133.5l116-66.75m0-9.23l-4 2.3-116 66.75-4 2.31v142.75l4 2.31 116 66.75 4 2.3 4-2.3 116-66.75 4-2.31V102.13l-4-2.31-116-66.75-4-2.3z"
          />
          <g opacity={0.9}>
            <path
              fill="url(#prefix__linear-gradient)"
              fillRule="evenodd"
              d="M34.83 242.57V104.44l119.98-69.05 119.97 69.05v138.13l-119.97 69.05-119.98-69.05z"
              filter="url(#shadow)"
            />
            <path
              className="prefix__cls-4"
              d="M154.81 40l116 66.75v133.5l-116 66.75-116-66.75v-133.5l116-66.75m0-9.23l-4 2.3-116 66.75-4 2.31v142.75l4 2.31 116 66.75 4 2.3 4-2.3 116-66.75 4-2.31V102.13l-4-2.31-116-66.75-4-2.3z"
            />
          </g>
          <path
            fill="url(#prefix__inner_gradient)"
            d="M270.78 108.7v-1.95l-1.46-.84-114.48 66.63-114.52-66.65-1.49.86v1.91l114.43 66.6v130.86l1.55.88 1.6-.92V175.26l114.37-66.56z"
          />
          <path fill="none" d="M85 122h141v101H85z" />
          <path
            className="prefix__cls-9"
            d="M110.06 190.89a13 13 0 0 0 6.22-4.44 11.87 11.87 0 0 0 2.12-7.13q0-6.07-4.28-9.33T102 166.74H84.82v51.71h18.41a24.15 24.15 0 0 0 9.63-1.74 13.63 13.63 0 0 0 6.19-5 13.87 13.87 0 0 0 2.15-7.81 12.41 12.41 0 0 0-2.91-8.42 15 15 0 0 0-8.23-4.59zm-20.85-20.32h12.29q12.3 0 12.3 9.11a8.79 8.79 0 0 1-3.2 7.27c-2.14 1.72-5.19 2.57-9.17 2.57H89.21zM113 211.9q-3.6 2.72-10.29 2.72h-13.5v-21.27h13.66q13.72 0 13.73 10.78a9.15 9.15 0 0 1-3.6 7.77zM171.21 173a21.47 21.47 0 0 0-7.65-5.43 27.51 27.51 0 0 0-20 0 21.42 21.42 0 0 0-7.66 5.43 24 24 0 0 0-4.89 8.5 34.13 34.13 0 0 0-1.69 11.1 33.64 33.64 0 0 0 1.72 11.06 24.87 24.87 0 0 0 4.89 8.54 21.45 21.45 0 0 0 7.63 5.46 27.11 27.11 0 0 0 20 0 21.5 21.5 0 0 0 7.62-5.46 24.87 24.87 0 0 0 4.89-8.54 33.64 33.64 0 0 0 1.72-11.06 34.13 34.13 0 0 0-1.69-11.1 23.85 23.85 0 0 0-4.89-8.5zm.54 29.14a20.72 20.72 0 0 1-3.92 7.27 17.16 17.16 0 0 1-6.14 4.6 21.55 21.55 0 0 1-16.25 0 17.11 17.11 0 0 1-6.15-4.6 20.88 20.88 0 0 1-3.92-7.27 33.8 33.8 0 0 1 0-19 21 21 0 0 1 3.92-7.23 16.93 16.93 0 0 1 6.18-4.6 21.38 21.38 0 0 1 16.18 0 16.93 16.93 0 0 1 6.18 4.6 20.79 20.79 0 0 1 3.92 7.23 33.8 33.8 0 0 1 0 19zM215.58 205.07q-4.79-6.65-9.82-13.31 4.61-6.22 9-12.47t8.63-12.55h-5q-3.6 5.64-7.41 11.21t-7.84 11q-8-11-15.31-22.2h-5.18q4.24 6.28 8.67 12.55t9 12.47q-5.1 6.66-9.85 13.31t-9.28 13.38h5.11q3.81-5.92 8-11.94t8.63-12q4.46 5.85 8.63 11.9t8 12h5.25q-4.44-6.7-9.23-13.35z"
          />
          <path d="M158.79 137.25c0 2.94-3.66 2.77-3.66 2.77h-3.66v-5.32h3.66c3.77 0 3.66 2.55 3.66 2.55m-7.32-10.65h2.79c2.9.15 2.79 2.31 2.79 2.31 0 2.68-3.21 2.72-3.21 2.72h-2.37zm6.65 6.08a4.33 4.33 0 0 0 2.48-3.9s.38-4.65-5.77-5.21H148V143h7.83s6.54 0 6.54-5.49c0 0 .15-3.75-4.25-4.86m-17.67-12.93h28.74v27.08h-28.74zM125.66 137.25c0 2.94-3.66 2.77-3.66 2.77h-3.66v-5.32H122c3.77 0 3.66 2.55 3.66 2.55m-7.32-10.65h2.79c2.89.15 2.78 2.31 2.78 2.31 0 2.68-3.2 2.72-3.2 2.72h-2.37zm6.64 6.08a4.33 4.33 0 0 0 2.49-3.9s.38-4.65-5.77-5.21h-6.83V143h7.82s6.54 0 6.54-5.49c0 0 .15-3.75-4.25-4.86m-17.66-12.93h28.73v27.08h-28.73zM196.46 125v3.6a16.36 16.36 0 0 0-7.39-2.2s-7.23-.14-7.56 6.93c0 0-.26 6.51 7.47 6.88 0 0 3.25.4 7.65-2.42v3.73a15.52 15.52 0 0 1-12.75.81 9.74 9.74 0 0 1 1.46-18.44 13.86 13.86 0 0 1 5.74-.43 20.54 20.54 0 0 1 5.38 1.54m-22.87 21.87h28.73v-27.12h-28.73z" />
        </g>
      </g>
    </g>
  </SVG>
);

export default Logo;
