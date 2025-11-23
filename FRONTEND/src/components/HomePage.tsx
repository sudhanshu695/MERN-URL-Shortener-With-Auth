import AnimateRace from "./AnimateRace"
import MainCard from "./MainCard"
import { useEffect, useState } from "react";


const HomePage = () => {

     const [ani, setAni] = useState<boolean>(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setAni(true);
    }, 1300);

    return () => clearTimeout(time);
  }, []);

  return (

       <div className="relative flex justify-center items-center min-h-screen">
          <div className="absolute top-29">{ani && <AnimateRace />}</div>
          <MainCard />
        </div> 
  )

}

export default HomePage