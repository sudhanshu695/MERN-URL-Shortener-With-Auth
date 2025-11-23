import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

interface urlResponse {
  _id: string;
  shortId: string;
  redirectURL: string;
  visitHistory: { timestamp?: string; referrer?: string }[];
}

const Analytics = () => {
  const [urls, setUrls] = useState<urlResponse[]>([]);

  useEffect(() => {
    const getUserUrl = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/yoururls`,
          { withCredentials: true } // 🔥 THIS IS REQUIRED
        );

        const data = res.data;
        setUrls(data.allURLs);
      } catch (error) {
        console.log(error);
      }
    };

    getUserUrl();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full px-8 py-20 bg-[#2D274B] text-white flex justify-center"
    >
      <div
        className="
          m-auto
          max-w-4xl w-full
          bg-white/10 
          backdrop-blur-2xl
          rounded-3xl
          p-10
          border border-white/20
          shadow-[0_0_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Analytics Of Your Short URL
        </h1>

        {/* Description */}
        <p className="text-white/80 leading-relaxed text-lg text-center mb-10">
          Our Analytics dashboard gives you a clear view of all the short URLs
          you’ve generated. Each link you create is automatically tracked,
          allowing you to see how many times it has been clicked and how it's
          performing over time. This helps you understand which links your
          audience interacts with the most. With real-time stats and organized
          data, you can easily manage your URLs and keep track of your reach—all
          in one place.
        </p>

        <div className="flex justify-center mb-3">
          <span className="w-full h-0 border"></span>
        </div>

        <h1 className="text-center text-2xl font-bold">Links </h1>

        <h2 className="text-xl font-semibold mb-3">Your Links</h2>

        {urls.length === 0 ? (
          <p className="text-white/70 text-sm">No URLs created yet.</p>
        ) : (
          urls.map((url) => (
            <div
              key={url._id}
              className="mt-3 bg-white/10 border border-white/20 py-6 px-15 rounded-2xl shadow-md backdrop-blur-md hover:bg-white/20 transition"
            >
              <div key={url._id} className="border p-3 my-2 rounded">
                <p>
                  <strong>Short URL : </strong>
                  <a
                    className="text-blue-300 underline hover:text-blue-400"
                    href={`${import.meta.env.VITE_API_URL}/${url.shortId}`}
                    target="_blank" // open in new tab
                    rel="noopener noreferrer" //for security
                  >
                    {`${import.meta.env.VITE_API_URL}/${url.shortId}`}
                  </a>
                </p>
                <p>
                  <strong>Long URL : </strong>
                  <a
                    href={url.redirectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline hover:text-blue-400"
                  >
                    {url.redirectURL}
                  </a>
                </p>
                <p>
                  <strong>Total Visits : </strong> {url.visitHistory.length}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Analytics;
