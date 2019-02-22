import React from 'react'

const NHS = props => (
  <svg viewBox="0 0 87 97">
    <defs>
      <path
        id="prefix_NHS__a"
        d="M30.347.534l30.124 17.517v35.035L30.347 70.603.224 53.086V18.05z"
      />
      <filter
        id="prefix_NHS__b"
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
        id="prefix_NHS__d"
        d="M38.915 1.977l-.85 2.674c-.68-.326-1.604-.614-2.905-.614-1.396 0-2.529.21-2.529 1.289 0 1.903 5.114 1.193 5.114 5.273 0 3.713-3.378 4.676-6.435 4.676-1.358 0-2.925-.329-4.075-.695l.83-2.732c.697.463 2.095.77 3.245.77 1.096 0 2.81-.211 2.81-1.597 0-2.156-5.113-1.347-5.113-5.136 0-3.466 2.982-4.505 5.87-4.505 1.623 0 3.15.175 4.038.597zM28.782 1.61l-2.736 13.433h-3.528l1.17-5.753h-4.171l-1.17 5.753H14.82L17.557 1.61h3.526l-1.036 5.139h4.17l1.038-5.14h3.527zm-12.527 0l-2.791 13.433h-4.38L6.331 5.748h-.038l-1.832 9.295h-3.32L3.953 1.61h4.394l2.7 9.315h.036l1.85-9.315h3.321zM0 16.689h40.43V0H0v16.69z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" opacity={0.1}>
      <g transform="translate(12.395 11.558)">
        <mask id="prefix_NHS__c" fill="#fff">
          <use xlinkHref="#prefix_NHS__a" />
        </mask>
        <g transform="rotate(-180 30.347 35.568)">
          <use fill="#000" filter="url(#prefix_NHS__b)" xlinkHref="#prefix_NHS__a" />
          <path
            fill="#EDEDED"
            stroke="#FFF"
            strokeWidth={4}
            d="M30.347-1.78L62.471 16.9v37.336l-32.124 18.68-32.123-18.68V16.901L30.347-1.78z"
          />
        </g>
        <g fill="#FFF" mask="url(#prefix_NHS__c)">
          <path d="M78.594-10.975V81.5H-6.93v-92.475z" />
        </g>
      </g>
      <g transform="translate(22.626 38.544)">
        <mask id="prefix_NHS__e" fill="#fff">
          <use xlinkHref="#prefix_NHS__d" />
        </mask>
        <use fill="#000" xlinkHref="#prefix_NHS__d" />
        <g fill="#000" mask="url(#prefix_NHS__e)">
          <path d="M-37.686-50.992h116.34V66.356h-116.34z" />
        </g>
      </g>
    </g>
  </svg>
)

export default NHS;
