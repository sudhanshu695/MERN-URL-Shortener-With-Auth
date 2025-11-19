import { motion } from "framer-motion";

interface UrlResponse {
  shortUrl: string | null;
  setShortUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

const PopUp = ({ shortUrl, setShortUrl }: UrlResponse) => {
  if (!shortUrl) return null;


  const handleClose = () => {
       navigator.clipboard.writeText(shortUrl);
       setShortUrl(null);
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center 
      backdrop-blur-sm z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="bg-white px-6 py-6 rounded-xl shadow-2xl 
        text-center w-[480px]"
      >
        <h2 className="font-bold text-xl">Short URL Ready! 🎉</h2>

        <p className="mt-3 font-semibold text-blue-600 break-all">
          {shortUrl}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <motion.button
          whileTap={{scale : 1.1}}
            onClick={handleClose }
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400"
          >
            Copy
          </motion.button>

          <button
            onClick={() => setShortUrl(null)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PopUp;
