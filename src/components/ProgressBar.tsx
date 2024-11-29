import React from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage}) => {
  return (
    <div className="w-full max-w-md mx-auto ml-10">
      <div className="text-2xl font-bold text-blue-600 mb-2">{percentage}%</div>
      
      <div className="w-80 h-6 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${percentage}%` }}
        >
            <p className="text-white font-bold text-center">Умумий натижа</p>
        </div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-700">{}</div>
    </div>
  );
};

export default ProgressBar;
