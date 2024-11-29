import { useEffect, useState } from 'react';
import Gauge from './Gauge';

interface PersonData {
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
  height: number;
  weight: number;
  index: number;
  position: string;
  candidate: string;
  imageUrl: string;
}

export default function ProfileCard() {
  const [data, setData] = useState<PersonData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://trello.vimlc.uz/get-personal-info')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result: PersonData) => {
        setData(result);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Fetch error:', error);
      });
  }, []);

  if (error) {
    return <p className="text-center text-red-500">Xато: {error}</p>;
  }

  return (
    <div className="h-[343px] border p-4 flex items-center justify-center">
      {data ? (
        <div className="max-w-[1440px] pt-[25px] h-[343px] flex">
          <div>
            <img
              src={data.imageUrl}
              alt={data.imageUrl}
              className="w-[216px] h-[288px] rounded-md"
            />
          </div>
          <div className="ml-8">
            <div className="h-28">
              <h1 className="font-semibold text-[#212529] text-5xl">{data.firstName}</h1>
              <h2 className="font-normal text-[#212529] text-5xl">{data.lastName}</h2>
            </div>
            <div className="mt-[30px] mb-9 h-[62px]">
              <p>
                <span className="mr-3">Туғилган сана:</span>
                {data.birthday}
              </p>
              <p>
                <span className="mr-3">Туғилган жой:</span>
                {data.address}
              </p>
            </div>
            <div className="flex w-[245px] justify-between">
              <div className="flex flex-col">
                <p className="font-light">Бўйи:</p>
                <p className="font-medium">{data.height}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-light">Вазни:</p>
                <p className="font-medium">{data.weight}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-light">Индекс:</p>
                <p className="font-medium">{data.index}</p>
              </div>
              <div>
              <Gauge value={30} w-12 h-12/>
              {/* <p>Норма</p> */}
              </div>
            </div>
          </div>
          <div className="ml-[247px]">
            <p className="font-normal text-[#495057] text-xl">Лавозими:</p>
            <h3 className="text-[#212529] text-2xl font-normal w-[421px] mb-3">
              {data.position}
            </h3>
            <p className="font-normal text-[#495057] text-xl">Номзод:</p>
            <h3 className="text-[#212529] text-2xl font-normal w-[421px]">
              {data.candidate}
            </h3>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Kutib turing...</p>
      )}
    </div>
  );
}
