import cat3 from '../Assest/cat3 (1).png'
import cat2 from '../Assest/cat2.png'
import mouse3 from '../Assest/mousee3.png'
import mouse2 from '../Assest/mouse2.png'
import sitting2 from '../Assest/sitting3.png'
import { useEffect, useState } from 'react'
import { motion , useMotionValue } from "framer-motion";

const catsize ={
  cat3 : 'w-[100px]',
  cat2 : 'w-[82px]'
}

const mousesize = {
  mouse3 : 'w-14',
  mouse2 : 'w-19',
}

const AnimateRace = () => {

  const [step , setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  // bind x-motion value
  const xCat = useMotionValue(0);

  // walking frame switch
  useEffect(() => {
    if (finished) return;
    const interval = setInterval(() => {
      setStep(prev => (prev === 0 ? 1 : 0));
    }, 250);

    return () => clearInterval(interval);
  }, [finished]);


  return (
    <div className='flex justify-center items-center gap-4 overflow-hidden w-250'>
     
      {!finished ? (
        <>
          {/* CAT */}
          <motion.img 
            className={`${step === 0 ? catsize.cat2 : catsize.cat3} h-auto`}
            src={step === 0 ? cat3 : cat2}
            style={{ x: xCat }}   // VERY IMPORTANT
            initial={{ x: -400 }}
            animate={{ x: 690 }}
            transition={{ duration: 5, ease: "linear" }}
            onUpdate={() => {
              if (xCat.get() >= 690) {
                setFinished(true);
              }
            }}
          />

          {/* MOUSE */}
          <motion.img 
            className={`${step === 0 ? mousesize.mouse2 : mousesize.mouse3} h-auto pt-2`}
            src={step === 0 ? mouse2 : mouse3}
            initial={{ x: -380 }}
            animate={{ x: 690 }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </>
      ) : (
        <motion.img  
          drag='x'
          dragConstraints={{ left : -10 , right : 0 }}
        className='p-0 mt-1 w-15' src={sitting2} alt="sitting" />
      )}

    </div>
  );
};

export default AnimateRace;
