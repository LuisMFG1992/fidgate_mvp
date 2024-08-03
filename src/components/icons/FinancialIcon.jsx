import * as React from 'react'
const FinancialIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={26}
    height={26}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#000'
        d='M2.063 22.375h21.875v1.563H2.063v-1.563Zm19.53-13.281a.781.781 0 0 0 .782-.781V5.969a.781.781 0 0 0-.516-.735L13.266 2.11a.781.781 0 0 0-.532 0L4.141 5.234a.781.781 0 0 0-.516.735v2.343a.781.781 0 0 0 .781.782h.782V19.25H3.625v1.563h18.75V19.25h-1.563V9.094h.782ZM5.189 6.516 13 3.672l7.813 2.844V7.53H5.188V6.516Zm9.375 12.734h-3.126V9.094h3.126V19.25ZM6.75 9.094h3.125V19.25H6.75V9.094Zm12.5 10.156h-3.125V9.094h3.125V19.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <rect width={25} height={25} x={0.5} y={0.5} fill='#fff' rx={5} />
      </clipPath>
    </defs>
  </svg>
)
export default FinancialIcon
