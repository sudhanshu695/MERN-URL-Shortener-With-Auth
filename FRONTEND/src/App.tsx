import Header from './components/Header';
import MainCard from './components/MainCard';
import './index.css'
import AnimatedRace from './components/AnimateRace';
import { useEffect, useState } from 'react';



function App() {


  const [ani , setAni] = useState<boolean>(false)

  useEffect(() => {
  const time =  setTimeout(() => {
      setAni(true);
    }, 1300);

   return () => clearTimeout(time);
  }, [])

  return (
    <div>
      <Header />
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="absolute top-29">


       {ani && ( <AnimatedRace /> )}

      </div>
      <MainCard />
    </div>
   </div>
  );
}

export default App;
