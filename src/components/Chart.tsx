import React from 'react';

interface GaugeChartProps {
  value: number;
}

const Chart: React.FC<GaugeChartProps> = ({ value }) => {
  const angle = 180 * value;
  const gradientId = 'gauge-gradient';

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <svg className="w-[43px] h-[28px]" viewBox="0 0 200 120">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2196F3" />
            <stop offset="25%" stopColor="#4CAF50" />
            <stop offset="50%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#F44336" />
          </linearGradient>
        </defs>
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="20"
        />
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="20"
        />
        <line
          x1="100"
          y1="100"
          x2={100 + 70 * Math.cos((180 - angle) * Math.PI / 180)}
          y2={100 - 70 * Math.sin((180 - angle) * Math.PI / 180)}
          stroke="#333333"
          strokeWidth="2"
        />
        <circle cx="100" cy="100" r="5" fill="#333333" />
      </svg>
    </div>
  );
};

export default Chart;
