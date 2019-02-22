import React from 'react'

const IPlayer = props => (
  <svg viewBox="0 0 104 117">
    <defs>
      <path
        id="iplayer-prefix__b"
        d="M40.297.707l40 23.192v46.383l-40 23.192-40-23.192V23.9z"
      />
      <filter
        id="iplayer-prefix__a"
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
        id="iplayer-prefix__c"
        d="M30.498 18.657L11.85 2.33C10.605 1.31 9.428.844 7.408.844H3.304C1.47.844 0 2.357 0 4.22v6.221h10.175V7.638c0-.932 1.137-1.416 1.852-.72L26.63 19.652c.661.643.771 1.36.086 2.077L12.056 34.59c-.804.6-1.852.133-1.852-.742v-18.73H.03v22.238c0 1.593 1.414 3.265 3.361 3.265h4.048c2.02 0 3.175-.462 4.48-1.43L30.48 23.187a3 3 0 0 0 .017-4.53z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(-180 49.362 56.018)">
        <use fill="#000" filter="url(#iplayer-prefix__a)" xlinkHref="#iplayer-prefix__b" />
        <path
          fill={props.selected ? props.theme.colours.body : props.theme.colours.grey}
          stroke="#FFF"
          strokeWidth={4}
          d="M40.297-1.605l42 24.352v48.688l-42 24.35-42-24.35V22.747l42-24.352z"
        />
      </g>
      <g transform="translate(46.09 43.357)">
        <mask id="iplayer-prefix__d" fill="#fff">
          <use xlinkHref="#iplayer-prefix__c" />
        </mask>
        <use fill="#FFF" xlinkHref="#iplayer-prefix__c" />
        <g fill={props.selected ? props.theme.colours.white : props.theme.colours.body} mask="url(#iplayer-prefix__d)">
          <path d="M-64.902-60.598H96.183v160.11H-64.902z" />
        </g>
      </g>
    </g>
  </svg>
)

export default IPlayer;
