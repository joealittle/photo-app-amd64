import React from 'react'

const SvgComponent = props => (
  <svg viewBox="0 0 104 117">
    <defs>
      <path
        id="instagram-icon__b"
        d="M40.297.707l40 23.192v46.383l-40 23.192-40-23.192V23.9z"
      />
      <filter
        id="instagram-icon__a"
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
        id="instagram-icon__c"
        d="M26.337 33.49a6.568 6.568 0 1 1 0-13.137 6.568 6.568 0 0 1 0 13.137m0-16.687c5.589 0 10.119 4.53 10.119 10.119 0 5.588-4.53 10.118-10.119 10.118-5.588 0-10.118-4.53-10.118-10.118 0-5.589 4.53-10.119 10.118-10.119zm-.006-9.639c5.368 0 6.04.023 8.149.119 2.103.095 3.54.428 4.797.916a9.69 9.69 0 0 1 3.5 2.272 9.654 9.654 0 0 1 2.28 3.49c.489 1.253.823 2.685.919 4.782.096 2.101.119 2.772.119 8.123 0 5.35-.023 6.021-.12 8.123-.095 2.097-.43 3.529-.918 4.782a9.653 9.653 0 0 1-2.28 3.49 9.691 9.691 0 0 1-3.5 2.272c-1.257.487-2.694.82-4.797.916-2.108.095-2.781.118-8.149.118-5.368 0-6.04-.023-8.149-.118-2.103-.096-3.54-.43-4.797-.916a9.692 9.692 0 0 1-3.5-2.273 9.654 9.654 0 0 1-2.28-3.49c-.489-1.252-.823-2.684-.919-4.781-.096-2.102-.119-2.773-.119-8.123 0-5.351.023-6.022.119-8.123.096-2.097.43-3.53.919-4.783a9.654 9.654 0 0 1 2.28-3.49 9.69 9.69 0 0 1 3.5-2.271c1.257-.488 2.694-.82 4.797-.916 2.108-.096 2.781-.119 8.149-.119zm0 3.55c-5.277 0-5.902.02-7.986.115-1.927.087-2.974.408-3.67.678-.923.358-1.581.785-2.273 1.474a6.102 6.102 0 0 0-1.478 2.265c-.27.695-.593 1.738-.68 3.659-.096 2.077-.116 2.7-.116 7.96 0 5.261.02 5.884.115 7.962.088 1.92.41 2.964.68 3.658.36.92.788 1.576 1.48 2.265.69.69 1.35 1.117 2.272 1.474.696.27 1.743.59 3.67.678 2.083.095 2.708.115 7.986.115s5.903-.02 7.986-.115c1.927-.087 2.974-.408 3.67-.678.923-.357 1.581-.784 2.273-1.474a6.095 6.095 0 0 0 1.478-2.265c.27-.694.593-1.737.68-3.658.096-2.078.116-2.7.116-7.961 0-5.26-.02-5.884-.115-7.961-.088-1.921-.41-2.964-.68-3.659-.36-.92-.788-1.576-1.48-2.265-.691-.69-1.35-1.116-2.272-1.474-.696-.27-1.743-.59-3.67-.678-2.084-.095-2.709-.115-7.986-.115zm12.927 5.622a2.335 2.335 0 1 1-4.67 0 2.335 2.335 0 0 1 4.67 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(-180 46.281 52.815)">
        <use fill="#000" filter="url(#instagram-icon__a)" xlinkHref="#instagram-icon__b" />
        <path
          fill={props.selected ? props.theme.colours.body : props.theme.colours.grey}
          stroke="#FFF"
          strokeWidth={4}
          d="M40.297-1.605l42 24.352v48.688l-42 24.35-42-24.35V22.747l42-24.352z"
        />
      </g>
      <g transform="translate(26.125 31.666)">
        <mask id="instagram-icon__d" fill="#fff">
          <use xlinkHref="#instagram-icon__c" />
        </mask>
        <use fill="#FFF" xlinkHref="#instagram-icon__c" />
        <g fill={props.selected ? props.theme.colours.white : props.theme.colours.body} mask="url(#instagram-icon__d)">
          <path d="M.004.004h52.701v53.702H.004z" />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent
