import { useEffect, useState } from "react";
import logo from "../Logo/logo.png"
import {motion} from 'framer-motion';



const navVariants = {
    starting : { top : -100  , transition : {duration : 0.7} },
    later : { top : 0 , transition : { duration : 0.7}}
}


const itemsVariant = {
  noHover: { scale: 1 },
  onHover: { scale: 1.1, color: "White" },
};

const Header = () => {

      const [isOpen , setIsOpen] = useState(false);

      useEffect(() => {

        const timer = setTimeout(() => {
             setIsOpen(true);
        }, 1200);

        return () => clearTimeout(timer);

      }, [])


  return (


    <motion.nav 
    whileHover={{height : 100}}
    variants={navVariants}
    initial='starting'
    animate={ isOpen ? 'later' : 'starting'}
    className="p-3 top-0 left-0 w-full h-20 bg-[#2D274B] text-[#9787F3] fixed px-6 flex items-center shadow-2xl z-50">
        
      <div className="flex justify-between items-center w-full">

        <div>
            <motion.img src={logo} className="cursor-pointer h-25" alt="log"
            />
        </div>


        <div className="hidden md:block"> 

          <input 
           className="w-72 px-4 py-2 rounded-xl bg-[#3C3460] text-white placeholder-gray-300 focus:outline-none"
          type="text" placeholder="Search Recent Links" />

          <button className="bg-[#383063] px-5 rounded-lg m-3 py-2 hover:bg-[#302a5d]"> Search </button>
        </div>


        <motion.div 
         className=" flex space-x-5 font-semibold">
          <motion.a  variants={itemsVariant}
          initial='noHover'
          whileHover='onHover'
          href="#">Analytics</motion.a>

          <motion.a variants={itemsVariant}
          initial='noHover'
          whileHover='onHover'
          href="#">Upgrade</motion.a>

          <motion.a variants={itemsVariant}
          initial='noHover'
          whileHover='onHover'
          href="#">Profile</ motion.a>
        </motion.div>


      </div>
    </motion.nav>
  );
};

export default Header;
