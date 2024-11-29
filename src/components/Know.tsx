import { FC, useEffect, useState } from "react";
import LineChart from "./LineChart";
import ProgressBar from "./ProgressBar";
import Cart from "./Cart"
import Card from "./ui/Card"
interface ChartData {
  percentage: number;
  label: string;
  color: string;
}

const Know: FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/knowlodge")
      .then((response) => response.json())
      .then((result) => setData(result.semicharts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="">
    <h2 className="text-[28px] font-bold text-blue-500 ml-32">Билим тесты</h2>
      <div className="p-8 w-[1200px] ml-24 bg-transparent font-sans flex">
      <div className="mb-8">
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <svg
                className="w-[140px] h-[70px]"
                viewBox="0 0 36 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 1 18 A 17 17 0 0 1 35 18"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2.5"
                />
                <path
                  d="M 1 18 A 17 17 0 0 1 35 18"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="2.5"
                  strokeDasharray={`${(item.percentage / 100) * 53.38}, 53.38`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[32px] mt-7 font-bold text-black">
                  {item.percentage}%
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-[14px] leading-[1.4] text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
     <div className="h-32 mt-0">
     <LineChart />
     <div className="bg-transparent flex items-center justify-center mb-10">
      <ProgressBar percentage={78} />
    </div>
     </div>
     <div className="w-[500px] h-[300px] mt-10">
      <img src="/images/Grafic.svg"
      />
     </div>
    </div>
    <Cart></Cart>
    <Card></Card>
      </div>
  );
};

export default Know;
 