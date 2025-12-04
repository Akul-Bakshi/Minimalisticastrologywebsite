import { ChevronDown } from 'lucide-react';

interface KundaliChartProps {
  isDarkMode: boolean;
}

export function KundaliChart({ isDarkMode }: KundaliChartProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      {/* User Info */}
      <div className="text-center space-y-1 mb-4">
        <p className={`text-sm ${isDarkMode ? 'text-[#EEEBE6]' : 'text-[#000000]'}`}>Birth Chart (D1)</p>
        <p className={`text-xs ${isDarkMode ? 'text-[#9B9792]' : 'text-[#B1ADA1]'}`}>Nov 26, 2025 • 12:00 PM</p>
      </div>

      {/* D1 Chart - Full Size */}
      <div className="flex-1 flex items-center justify-center w-full max-w-md">
        <div className="relative w-full aspect-square">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Outer Square */}
            <rect
              x="10"
              y="10"
              width="280"
              height="280"
              fill={isDarkMode ? '#3D3B39' : '#FFFFFF'}
              stroke={isDarkMode ? '#4A4745' : '#B1ADA1'}
              strokeWidth="2"
            />
            
            {/* Diamond - corners touching the centers of each side of square */}
            <path
              d="M 150 10 L 290 150 L 150 290 L 10 150 Z"
              fill="none"
              stroke={isDarkMode ? '#4A4745' : '#B1ADA1'}
              strokeWidth="2"
            />
            
            {/* Two diagonal lines */}
            <line x1="10" y1="10" x2="290" y2="290" stroke={isDarkMode ? '#4A4745' : '#B1ADA1'} strokeWidth="2" />
            <line x1="290" y1="10" x2="10" y2="290" stroke={isDarkMode ? '#4A4745' : '#B1ADA1'} strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}