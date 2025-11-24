import { motion } from "framer-motion";

const AboutPage = () => {
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
          About Our URL Shortener
        </h1>

        {/* Description */}
        <p className="text-white/80 leading-relaxed text-lg text-center mb-10">
          Our Short-URL service helps you turn long and messy links into clean,
          shareable, and trackable URLs. Designed for simplicity and speed,
          it ensures your links always stay professional and easy to manage.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-md hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold mb-3">Fast</h2>
            <p className="text-white/70 text-sm">
              Instantly generate short URLs with a single click using our optimized backend.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-md hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold mb-3">Reliable</h2>
            <p className="text-white/70 text-sm">
              Every link is securely stored and redirected with high performance and uptime.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-md backdrop-blur-md hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold mb-3">Trackable</h2>
            <p className="text-white/70 text-sm">
              Analytics support lets you track clicks and user engagement.
            </p>
          </div>
        </div>


      </div>
    </motion.div>
  );
};

export default AboutPage;
