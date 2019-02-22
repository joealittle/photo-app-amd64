import React from 'react'

const HSBC = props => (
  <svg viewBox="0 0 87 97">
    <defs>
      <path
        id="prefix_HSBC__a"
        d="M30.347.534l30.124 17.517v35.035L30.347 70.603.224 53.086V18.05z"
      />
      <filter
        id="prefix_HSBC__b"
        width="153.1%"
        height="147.5%"
        x="-26.6%"
        y="-23.7%"
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
      </filter>
      <path
        id="prefix_HSBC__d"
        d="M30.001 0v20l10.001-10-10-10zm-20 0v20L0 10 10 0zm10 10l-10-10h20l-10 10 10 10h-20l10-10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" opacity={0.1}>
      <g transform="translate(12.546 11.463)">
        <mask id="prefix_HSBC__c" fill="#fff">
          <use xlinkHref="#prefix_HSBC__a" />
        </mask>
        <g transform="rotate(-180 30.347 35.568)">
          <use fill="#000" filter="url(#prefix_HSBC__b)" xlinkHref="#prefix_HSBC__a" />
          <path
            fill="#EDEDED"
            stroke="#FFF"
            strokeWidth={4}
            d="M30.347-1.78L62.471 16.9v37.336l-32.124 18.68-32.123-18.68V16.901L30.347-1.78z"
          />
        </g>
        <g fill="#FFF" mask="url(#prefix_HSBC__c)">
          <path d="M78.594-10.975V81.5H-6.93v-92.475z" />
        </g>
      </g>
      <g transform="translate(23.195 37.013)">
        <mask id="prefix_HSBC__e" fill="#fff">
          <use xlinkHref="#prefix_HSBC__d" />
        </mask>
        <use fill="#FFF" xlinkHref="#prefix_HSBC__d" />
        <g fill="#000" mask="url(#prefix_HSBC__e)">
          <path d="M-37.134-51.42H88.154V76.867H-37.134z" />
        </g>
      </g>
    </g>
  </svg>
)

export default HSBC;
