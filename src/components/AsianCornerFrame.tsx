import React from 'react';

export const AsianCornerLattice: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
  color?: string;
}> = ({ position, className = '', size = 56, color = '#D4AF37' }) => {
  const rotation = {
    'top-left': 'rotate(0deg)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  }[position];

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: rotation,
      }}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer boundary lines */}
        <path
          d="M 2 78 L 2 2 L 78 2"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        {/* Second inner concentric line */}
        <path
          d="M 10 78 L 10 10 L 78 10"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeOpacity="0.85"
        />
        {/* Geometric Chinese/Asian key fretwork interlocking pattern */}
        <path
          d="M 18 42 L 18 18 L 42 18 M 18 30 L 30 30 L 30 18 M 42 18 L 42 34 L 26 34 M 2 18 L 10 18 M 18 2 L 18 10 M 2 34 L 10 34 M 34 2 L 34 10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
        />
        {/* Small corner decorative node */}
        <rect
          x="22"
          y="22"
          width="4"
          height="4"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const MagnoliaFlowerEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Golden circular halo / ring behind flower */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeDasharray="4 2"
          opacity="0.9"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          stroke="#B38F2D"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Delicate branch / twig */}
        <path
          d="M 34 82 C 45 78, 52 72, 60 70 C 68 72, 75 78, 86 82"
          stroke="#5B3829"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Small leaves / buds in deep wine burgundy */}
        <path
          d="M 28 66 C 24 58, 28 50, 32 54 C 36 58, 33 66, 28 66 Z"
          fill="#5E1E28"
          stroke="#3D131A"
          strokeWidth="1"
        />
        <path
          d="M 92 66 C 96 58, 92 50, 88 54 C 84 58, 87 66, 92 66 Z"
          fill="#5E1E28"
          stroke="#3D131A"
          strokeWidth="1"
        />

        {/* Outer Magnolia Petals - Soft Ivory & Pearl White */}
        <path
          d="M 60 20 C 48 30, 42 45, 52 64 C 60 62, 68 62, 72 50 C 76 38, 70 25, 60 20 Z"
          fill="#FFFDF7"
          stroke="#E6DAC8"
          strokeWidth="1.5"
        />
        <path
          d="M 40 40 C 30 52, 34 68, 50 66 C 54 58, 50 48, 40 40 Z"
          fill="#FBF6EE"
          stroke="#DFD1BD"
          strokeWidth="1.2"
        />
        <path
          d="M 80 40 C 90 52, 86 68, 70 66 C 66 58, 70 48, 80 40 Z"
          fill="#FBF6EE"
          stroke="#DFD1BD"
          strokeWidth="1.2"
        />

        {/* Center Main Magnolia Blossom Petals */}
        <path
          d="M 60 30 C 50 42, 48 58, 58 68 C 62 68, 64 68, 68 58 C 72 48, 70 38, 60 30 Z"
          fill="#FFFFFF"
          stroke="#EAE0D0"
          strokeWidth="1.2"
        />
        <path
          d="M 48 48 C 42 58, 48 68, 58 70 C 58 64, 54 54, 48 48 Z"
          fill="#FFFDF9"
          stroke="#E6D7C3"
          strokeWidth="1"
        />
        <path
          d="M 72 48 C 78 58, 72 68, 62 70 C 62 64, 66 54, 72 48 Z"
          fill="#FFFDF9"
          stroke="#E6D7C3"
          strokeWidth="1"
        />

        {/* Magnolia golden pistil & stamens center */}
        <ellipse cx="60" cy="58" rx="7" ry="9" fill="#9C6B26" />
        <ellipse cx="60" cy="58" rx="5" ry="7" fill="#D4AF37" />
        <circle cx="58" cy="55" r="1.2" fill="#FFE599" />
        <circle cx="62" cy="55" r="1.2" fill="#FFE599" />
        <circle cx="60" cy="58" r="1.2" fill="#FFE599" />
        <circle cx="58" cy="61" r="1.2" fill="#FFE599" />
        <circle cx="62" cy="61" r="1.2" fill="#FFE599" />
      </svg>
    </div>
  );
};
