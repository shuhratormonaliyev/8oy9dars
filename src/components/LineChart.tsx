import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  const data = {
    labels: ["12.06", "18.06", "13.07", "14.07", "20.07", "24.07"],
    datasets: [
      {
        label: "Values",
        data: [10, 30, 50, 20, 40, 60],
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "#e5e5e5",
        },
      },
      x: {
        grid: {
          color: "#e5e5e5",
        },
      },
    },
  };

  return (
    <div className="w-96 h-64 max-w-2xl mx-auto p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
