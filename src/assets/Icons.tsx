import type { TrioTravelProps } from './types';

export const TrioTravel = ({ width, height, className }: TrioTravelProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={`cursor-pointer ${className}`}
      viewBox='0 0 400 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Icon group, centered visually */}
      <g
        transform='translate(60,50)'
        stroke='#0A6CF1'
        strokeWidth='4'
        fill='none'
        strokeLinecap='round'
      >
        {/* Circle (globe) */}
        <circle cx='0' cy='0' r='30' />
        {/* Trio arcs */}
        <path d='M-15 -15 Q0 -30 15 -15' />
        <path d='M-15 15 Q0 30 15 15' />
        <path d='M0 -30 L0 30' />
        {/* Airplane */}
        <polygon points='-2,-12 2,-12 0,-20' fill='#0A6CF1' />
      </g>

      {/* Text, vertically aligned to icon’s center */}
      <text
        x='120'
        y='50'
        fontFamily='Poppins, sans-serif'
        fontWeight='700'
        fontSize='36'
        fill='#000'
        dominantBaseline='middle'
      >
        Trio Travel
      </text>
    </svg>
  );
};
