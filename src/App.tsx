import { FC } from 'react'
import PersonPage from './components/Pageperson';
import Knowladge from './components/Know'
import Gerbs from '../public/images/Gerb.svg'
import Pragment from "../public/images/pragment.svg"
import './App.css'
// import Card from "./components/ui/Card"
const App: FC = () => {

  return ( 
    <div className=''>
      <div className='flex mb-10 w-[1440px] pl-[64px] mx-auto'>
      <div className="w-72 h-13 grid gap-2">
        <img
          src={Gerbs}
          alt="Logo"
          className="w-16 h-16 object-contain ml-16"
        />
        <h4 className="text-black w-48 h-12 text-center">
          Давлат хизматининг ягона электрон ахборот-таҳлил тизими
        </h4>
      </div>
      <div>
      <p className='w-[642px] font-semibold text-3xl text-center mt-10'>
       Республика Ассессмент маркази онлайн платформаси
       </p>
      </div>
      <div className='mt-10 ml-32'>
        <img src={Pragment} alt="" />
      </div>
      </div>
      {/* <Gauge></Gauge> */}
      <PersonPage />
      <Knowladge />
    </div>
  )
}

export default App;


