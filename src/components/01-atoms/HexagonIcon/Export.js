import React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 104 117">
    <defs>
      <path
        id="export-icon__b"
        d="M40.297.707l40 23.192v46.383l-40 23.192-40-23.192V23.9z"
      />
      <filter
        id="export-icon__a"
        width="140%"
        height="135.8%"
        x="-20%"
        y="-17.9%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="shadowSpreadOuter1"
        />
        <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={4}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.858823529 0 0 0 0 0.858823529 0 0 0 0 0.858823529 0 0 0 2 0"
        />
      </filter>
      <path
        id="export-icon__c"
        d="M10.486 0l.008.01L3.18 6.648l6.486 7.868 7.315-6.64-3.695-4.482 23.872.047-2.809 25.502-5.78-7.012-8.514-10.326-7.316 6.639L0 29.804l8.514 10.327 12.738-11.56 8.65 10.492 7.316-6.64-.002-.001L40.781.059z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(-180 46.094 52.94)">
        <use fill="#000" filter="url(#export-icon__a)" xlinkHref="#export-icon__b" />
        <path
          fill={props.selected ? props.theme.colours.body : props.theme.colours.grey}
          stroke="#FFF"
          strokeWidth={4}
          d="M40.297-1.605l42 24.352v48.688l-42 24.35-42-24.35V22.747l42-24.352z"
        />
      </g>
      <g transform="translate(30.74 38.872)">
        <mask id="export-icon__d" fill="#fff">
          <use xlinkHref="#export-icon__c" />
        </mask>
        <use fill="#000" xlinkHref="#export-icon__c" />
        <g fill={props.selected ? props.theme.colours.white : props.theme.colours.body} mask="url(#export-icon__d)">
          <path d="M73.408-35.448V76.914H-30.017V-35.448z" />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
