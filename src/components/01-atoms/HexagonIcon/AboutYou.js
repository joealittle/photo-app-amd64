import React from 'react'

const AboutYou = props => (
  <svg viewBox="0 0 104 117">
    <defs>
      <path
        id="about-you-prefix__b"
        d="M40.297.707l40 23.192v46.383l-40 23.192-40-23.192V23.9z"
      />
      <filter
        id="about-you-prefix__a"
        width="166.2%"
        height="158.5%"
        x="-33.1%"
        y="-29.2%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={2}
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
        id="about-you-prefix__c"
        d="M15.888 24.5c0-5.154 4.164-9.334 9.303-9.334 5.14 0 9.304 4.18 9.304 9.334 0 5.156-4.164 9.333-9.304 9.333-5.14 0-9.303-4.177-9.303-9.333zM25.19 0c13.487 0 24.42 10.974 24.42 24.505 0 7.15-3.072 13.57-7.941 18.048l-1.424-2.86c3.891-3.882 6.312-9.228 6.312-15.157 0-11.82-9.586-21.401-21.366-21.401-11.781 0-21.366 9.69-21.366 21.51 0 7.475 3.837 14.203 9.632 18.042l2.432-4.773h18.604l3.804 7.525C34.509 47.866 30.017 49 25.19 49 11.704 49 .772 38.032.772 24.5.772 10.97 11.704 0 25.192 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(-180 49.41 56.19)">
        <use fill="#000" filter="url(#about-you-prefix__a)" xlinkHref="#about-you-prefix__b" />
        <path
          fill={props.selected ? props.theme.colours.body : props.theme.colours.grey}
          stroke="#FFF"
          strokeWidth={4}
          d="M40.297-1.605l42 24.352v48.688l-42 24.35-42-24.35V22.747l42-24.352z"
        />
      </g>
      <g transform="translate(33.957 41.299)">
        <mask id="about-you-prefix__d" fill="#fff">
          <use xlinkHref="#about-you-prefix__c" />
        </mask>
        <use fill="#1E1E1C" xlinkHref="#about-you-prefix__c" />
        <g fill={props.selected ? props.theme.colours.white : props.theme.colours.body} mask="url(#about-you-prefix__d)">
          <path d="M73.41-27.819V76.588h-96.464V-27.819z" />
        </g>
      </g>
    </g>
  </svg>
)

export default AboutYou;
