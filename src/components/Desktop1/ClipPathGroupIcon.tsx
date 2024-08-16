import { memo, SVGProps } from 'react';

const ClipPathGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 169 174' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_22_640'
      style={{
        maskType: 'luminance',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={169}
      height={174}
    >
      <path d='M169 0H0V174H169V0Z' fill='white' />
    </mask>
    <g mask='url(#mask0_22_640)'>
      <path
        d='M57.0235 65.2501H168.79C166.161 77.5317 159.162 88.5701 148.978 96.4974C138.795 104.424 126.052 108.753 112.906 108.75H0C2.62913 96.4685 9.62764 85.4295 19.811 77.5027C29.9945 69.5761 42.7373 65.2476 55.883 65.2501H57.0235ZM168.79 43.5C166.161 31.2181 159.162 20.1797 148.978 12.2529C138.795 4.32589 126.052 -0.00256111 112.906 1.1369e-06H55.883V43.5H168.79ZM55.883 174C69.0289 174.002 81.7717 169.674 91.9548 161.748C102.138 153.821 109.137 142.782 111.766 130.5H55.883V174Z'
        fill='url(#paint0_linear_22_640)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_22_640'
        x1={84.3947}
        y1={0.0000011369}
        x2={84.3947}
        y2={174}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.42} stopColor='#026AA2' />
        <stop offset={0.85} stopColor='#98A2B3' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(ClipPathGroupIcon);
export { Memo as ClipPathGroupIcon };
