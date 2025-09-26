interface PlayerXProps {
  className?: string;
  size?: number | string;
}

export const PlayerX = ({
  className = 'fill-primary-2 size-12',
}: PlayerXProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      viewBox='0 0 256 256'
      xmlSpace='preserve'
      className={className}
    >
      <g
        style={{
          stroke: 'none',
          strokeWidth: 0,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'
      >
        <path
          d='M 13.4 88.492 L 1.508 76.6 c -2.011 -2.011 -2.011 -5.271 0 -7.282 L 69.318 1.508 c 2.011 -2.011 5.271 -2.011 7.282 0 L 88.492 13.4 c 2.011 2.011 2.011 5.271 0 7.282 L 20.682 88.492 C 18.671 90.503 15.411 90.503 13.4 88.492 z'
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
        <path
          d='M 69.318 88.492 L 1.508 20.682 c -2.011 -2.011 -2.011 -5.271 0 -7.282 L 13.4 1.508 c 2.011 -2.011 5.271 -2.011 7.282 0 l 67.809 67.809 c 2.011 2.011 2.011 5.271 0 7.282 L 76.6 88.492 C 74.589 90.503 71.329 90.503 69.318 88.492 z'
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform=' matrix(1 0 0 1 0 0) '
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
};

interface PlayerOProps {
  className?: string;
  size?: number | string;
}

export const PlayerO = ({
  className = 'fill-primary-1 size-14',
}: PlayerOProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 128 128'
      aria-hidden='true'
      role='img'
      className={className}
      preserveAspectRatio='xMidYMid meet'
    >
      <path
        d='M64.01 15.06c-34.13 0-55.46 24.1-55.46 53.82c0 29.73 21.33 53.82 55.46 53.82c34.12 0 55.45-24.1 55.45-53.82c-.01-29.73-21.33-53.82-55.45-53.82zm0 81.78c-17.73 0-28.82-12.52-28.82-27.96s11.08-27.96 28.82-27.96c17.73 0 28.81 12.52 28.81 27.96c-.01 15.44-11.09 27.96-28.81 27.96z'
        clipRule='evenodd'
        fillRule='evenodd'
      />
    </svg>
  );
};
