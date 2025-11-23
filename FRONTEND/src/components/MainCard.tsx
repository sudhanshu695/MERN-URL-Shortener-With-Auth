import { motion } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";

const MotionBtn = motion.button;

interface urlResponse {
  id: string;
  success: boolean;
}

const MainCardVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, delay: 1.2 } },
};

const MainCard = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const handleSubmit = async () => {
    const current = inputRef.current;
    if (!current) {
      alert("please enter a link");
      return;
    }

    const longUrl = current.value.trim();

    if (!longUrl) {
      alert("please enter a link");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post<urlResponse>(
        `${import.meta.env.VITE_API_URL}`,
        { url: longUrl },
        { withCredentials: true }
      );

      const data = response.data;

      if (data.success === false) {
        navigate("/login");
        return;
        setIsLoading(false);
      }

      const finalUrl = `${import.meta.env.VITE_API_URL}/${data.id}`;
      console.log(finalUrl);
      setShortUrl(finalUrl);
      setIsLoading(false);
    } catch (error: unknown) {
      // we dont know what kind of error is this so its set to unknown
      setIsLoading(false);

      if (axios.isAxiosError(error) && error.response?.status === 401) {
        // axios treat every error above 400 as error so go to catch block
        // so we put check block here
        // User is not logged in — redirect to login
        alert("You are not login");
        navigate("/login");
        return;
      }

      console.error(error);
      alert("Something went wrong! Try again.");
    }
  };

  return (
    <motion.div
      variants={MainCardVariant}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center min-h-screen"
    >
      <motion.div className="w-[1000px] h-100 bg-[#d2daf2] flex-col gap-4justify-center rounded-xl shadow-xl text-center ">
        <h1 className="p-2 font-bold text-2xl">
          Shorten Your Long Links <br /> in Seconds
        </h1>
        <br />

        <h3 className="text-gray-700 font-bold">
          Make your URLs clean, trackable, and easy to share.
        </h3>

        <motion.input
          ref={inputRef}
          type="text "
          initial={{ width: "50" }}
          whileTap={{ width: "70%" }}
          // transition={{type:'spring' , stiffness : 300}}
          placeholder="paste your link here..."
          className="mt-10 px-4 py-3 rounded boreder border-gray-300 text-center bg-[#4b4272] text-[#9787F3] font-semibold focus:outline-none"
        />

        <MotionBtn
          disabled={isLoading}
          onClick={handleSubmit}
          whileTap={{ scale: 1.1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
          }}
          className="bg-[#9787F3] px-4 py-3.5 rounded hover:bg-[#a091f3]"
        >
          {isLoading ? "Generating..." : "Generate"}
        </MotionBtn>

        <div className="text-gray-700 flex-col mt-10 justify-start items-start"></div>
        <h3 className="font-bold text-2xl">✓ No ads </h3>
        <h3 className="font-bold text-2xl">✓ Free to uses </h3>
        <h3 className="font-bold text-2xl">✓ Super fast </h3>
      </motion.div>
      <PopUp shortUrl={shortUrl} setShortUrl={setShortUrl} />
    </motion.div>
  );
};

export default MainCard;
