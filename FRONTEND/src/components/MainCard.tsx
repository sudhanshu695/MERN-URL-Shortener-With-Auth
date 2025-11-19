import {motion} from "framer-motion"
import { useRef, useState } from "react";
import axios from 'axios'
import PopUp from "./PopUp";




interface urlResponse {
  id : string;
}

const MainCard = () => {


  const inputRef = useRef<HTMLInputElement | null>(null);
  const [shortUrl , setShortUrl] = useState<string | null>(null)
  

  const handleSubmit = async() => {

    const current = inputRef.current;
    if (!current) {
      alert('please enter a link');
      return;
    }

    const longUrl = current.value.trim();
    
    if(!longUrl) {
      alert('please enter a link');
      return;
    }

    const response = await axios.post<urlResponse>(`${import.meta.env.VITE_API_URL}}`, {
      url : longUrl,
    });
    const data = response.data;
    // console.log(data);x

    const finalUrl = `${import.meta.env.VITE_API_URL}/${data.id}`
    console.log(finalUrl);
    setShortUrl(finalUrl);
  }


  return (

    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1000px] h-100 bg-[#d2daf2] flex-col gap-4justify-center rounded-xl shadow-xl text-center ">
          <h1 className="p-2 font-bold text-2xl">Shorten Your Long Links <br /> in Seconds</h1><br />

        
          <h3 className="text-gray-700 font-bold" >Make your URLs clean, trackable, and easy to share.</h3>
         
        <motion.input
        ref={inputRef}
        type="text " 
        initial={{width : '50'}}
        whileTap={{width : '70%' }}
        // transition={{type:'spring' , stiffness : 300}}
        placeholder="paste your link here..."
        className="mt-10 px-4 py-3 rounded boreder border-gray-300 text-center bg-[#4b4272] text-[#9787F3] font-semibold focus:outline-none" />

        <motion.button 
        onClick={handleSubmit}
        whileTap={{scale : 1.1}}
        transition={{duration : 0.6 , type: 'spring' , stiffness : 300}}
        className="bg-[#9787F3] px-4 py-3 rounded hover:bg-[#a091f3] ">Generate</motion.button>
        
         
        <div className="text-gray-700 flex-col mt-10 justify-start items-start">
        </div>
         <h3 className="font-bold text-2xl">✓ No ads </h3>
         <h3 className="font-bold text-2xl">✓ Free to uses </h3>
         <h3 className="font-bold text-2xl">✓ Super fast </h3>
      </div>
      <PopUp shortUrl={shortUrl}  setShortUrl={setShortUrl}/>
    </div>
  );
};

export default MainCard;
