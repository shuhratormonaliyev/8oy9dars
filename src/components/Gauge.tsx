import { useEffect, useState } from 'react'

interface GaugeMeterProps {
  value?: number
  min?: number
  max?: number
  label?: string
}

export default function GaugeMeter({
  value = 30,
  min = 0,
  max = 100,
  label = "Норма"
}: GaugeMeterProps) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const normalizedValue = ((value - min) / (max - min)) * 180
    setRotation(normalizedValue)
  }, [value, min, max])

  return (
    <div className="flex flex-col items-center max-w-md">
      <svg
        viewBox="0 0 200 120"
        className="w-10 h-10"
      >
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#2196F3' }} />
            <stop offset="25%" style={{ stopColor: '#4CAF50' }} />
            <stop offset="50%" style={{ stopColor: '#FFC107' }} />
            <stop offset="75%" style={{ stopColor: '#FF9800' }} />
            <stop offset="100%" style={{ stopColor: '#F44336' }} />
          </linearGradient>
        </defs>
        
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        <g transform={`rotate(${rotation - 90}, 100, 100)`}>
          <path
            d="M 100 100 L 160 100"
            stroke="#9E9E9E"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="100"
            r="6"
            fill="#9E9E9E"
          />
        </g>
      </svg>
      
      <h2 className="text-xl text-blue-600">
        {label}
      </h2>
    </div>
  )
}

