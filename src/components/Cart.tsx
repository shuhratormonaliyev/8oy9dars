import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function SkillsDiagram() {
  const progressItems = [
    { label: 'Максадга интилувчанлик', value: 90 },
    { label: 'Эмоционал интеллект', value: 95 },
    { label: 'Креативлик', value: 75 },
    { label: 'Ходимларга йўналганлик', value: 86 },
    { label: 'Топширикларга йўналганлик', value: 95 },
    { label: 'Фаол иктимоий муносабатлар', value: 75 },
    { label: 'Ўз устида ишлаш', value: 86 },
    { label: 'Муаммоли вазиятга йўналганлик', value: 86 },
  ]

  const radarData = {
    labels: ['Photo shop', 'Illustrator', 'Xd', 'Index sign', 'Prem lere'],
    datasets: [
      {
        data: [90, 85, 88, 85, 90],
        backgroundColor: 'rgba(0, 82, 204, 0.2)',
        borderColor: 'rgb(0, 82, 204)',
        borderWidth: 2,
      },
    ],
  }

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: '#e5e7eb'
        },
        grid: {
          color: '#e5e7eb'
        },
        pointLabels: {
          font: {
            size: 12
          }
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-black">Шахсий ва касбий хусусиятлар</h2>
      
      <div className="flex grid-cols-1 md:grid-cols-2 gap-2 items-center mb-12">
        <div className="space-y-4 w-96">
          {progressItems.slice(0, 4).map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-96 max-w-md mx-auto">
          <Radar data={radarData} options={radarOptions} />
        </div>

        <div className="space-y-4 md:col-start-2 w-96">
          {progressItems.slice(4).map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Психологик диагностика</h2>
        <div className='flex gap-10'>
        <p className="text-gray-600 w-[644px] h-[155px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make  a type specimen book. It has survived not only five centuries, 
        </p>
        <p className="text-gray-600 w-[644px] h-[155px]">  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            
        </p>
        </div>
      </div>
    </div>
  )
}

