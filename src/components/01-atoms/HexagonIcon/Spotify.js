import React from 'react'

const Spotify = props => (
  <svg viewBox="0 0 104 117">
    <defs>
      <path
        id="spotify-prefix__b"
        d="M40.297.707l40 23.192v46.383l-40 23.192-40-23.192V23.9z"
      />
      <filter
        id="spotify-prefix__a"
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
        id="spotify-prefix__c"
        d="M36.508 21.852c-7.394-4.391-19.591-4.795-26.65-2.653a2.145 2.145 0 1 1-1.245-4.106c8.102-2.46 21.572-1.984 30.085 3.068a2.145 2.145 0 0 1-2.19 3.69m-.243 6.505a1.79 1.79 0 0 1-2.46.589c-6.164-3.79-15.564-4.887-22.857-2.674a1.79 1.79 0 0 1-2.232-1.191 1.79 1.79 0 0 1 1.193-2.23c8.33-2.529 18.688-1.304 25.768 3.047a1.789 1.789 0 0 1 .588 2.459m-2.807 6.246a1.428 1.428 0 0 1-1.965.475c-5.387-3.292-12.167-4.035-20.151-2.211a1.429 1.429 0 1 1-.637-2.787c8.738-1.998 16.233-1.138 22.28 2.557a1.43 1.43 0 0 1 .473 1.966M22.938 1.516C10.27 1.516 0 11.786 0 24.454c0 12.67 10.27 22.94 22.939 22.94s22.938-10.27 22.938-22.94c0-12.668-10.27-22.938-22.938-22.938"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(-180 49.443 55.999)">
        <use fill="#000" filter="url(#spotify-prefix__a)" xlinkHref="#spotify-prefix__b" />
        <path
          fill={props.selected ? props.theme.colours.body : props.theme.colours.grey}
          stroke="#FFF"
          strokeWidth={4}
          d="M40.297-1.605l42 24.352v48.688l-42 24.35-42-24.35V22.747l42-24.352z"
        />
      </g>
      <g transform="translate(35.302 41.273)">
        <mask id="spotify-prefix__d" fill="#fff">
          <use xlinkHref="#spotify-prefix__c" />
        </mask>
        <use fill="#000" xlinkHref="#spotify-prefix__c" />
        <g fill={props.selected ? props.theme.colours.white : props.theme.colours.body} mask="url(#spotify-prefix__d)">
          <path d="M-12.124-12.124h64.633v66.63h-64.633z" />
        </g>
      </g>
    </g>
  </svg>
)

export default Spotify;
