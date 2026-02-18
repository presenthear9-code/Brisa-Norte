
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-full aspect-square flex items-center justify-center overflow-visible">
        <svg viewBox="0 0 100 100" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
          {/* Background Wavy Lines (mimicking the uploaded image) */}
          <g>
            {[...Array(20)].map((_, i) => {
              const yOffset = i * 4 + 10;
              return (
                <path
                  key={i}
                  d={`M 0,${yOffset} C 25,${yOffset - 8} 50,${yOffset + 8} 75,${yOffset - 8} T 100,${yOffset}`}
                  stroke="#0D2C54"
                  strokeWidth="2"
                  fill="none"
                  opacity={0.9 - (i * 0.02)}
                />
              );
            })}
          </g>

          {/* Central Bold 'B' - Recreated to match the "cutout" or "overlay" feel */}
          <text 
            x="50" 
            y="72" 
            textAnchor="middle" 
            fontSize="65" 
            fontWeight="950" 
            fontFamily="'Plus Jakarta Sans', sans-serif"
            className="select-none"
            style={{ 
              fill: 'white',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
              paintOrder: 'stroke fill',
              stroke: '#0D2C54',
              strokeWidth: '1.5px'
            }}
          >
            B
          </text>
        </svg>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-extrabold text-deep-blue tracking-tight leading-none uppercase">Brisa</span>
        <span className="text-[10px] font-black text-light-blue tracking-[0.4em] leading-none uppercase">Norte</span>
      </div>
    </div>
  );
};

export default Logo;
