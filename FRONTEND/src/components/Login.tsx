import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface urlResponse {
    message : string, 
}


const MotionLink = motion(Link);
const Login = () => {
    const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [inputEmailError, setInputEmailError] = useState("");
  const [inputPasswordError, setInputPasswordError] = useState("");

  const validate = () => {
    let valid = true;

    if (inputEmail.includes("@gmail.com")) {
      setInputEmailError("");
    } else {
      setInputEmailError("Email must include @email.com ");
       valid = false;
    }

    if (inputPassword.length >= 8) {
      setInputPasswordError("");
    } else {
      setInputPasswordError("Password Must be atleast 8 digits");
       valid = false;
    }

    return valid;
  };

 const loginUser = async () => {
  if (!validate()) return;

  try {
    const response = await axios.post<urlResponse>(
      `${import.meta.env.VITE_API_URL}/login`,
      {
        email: inputEmail,
        password: inputPassword,
      }
    );

    alert(response.data.message);
    navigate("/");
  } catch (error) {
    console.log(error);
    alert("Invalid credentials");
  }
};

  return (
    <motion.div className="w-screen h-screen flex justify-center items-center z-69">
      <motion.div
        className="
          w-[900px] 
          h-[600px]
          bg-linear-to-br from-white/10 to-white/5
          backdrop-blur-2xl
          border border-white/20
          rounded-3xl
          shadow-xl
          p-10
          flex flex-col
        "
      >
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <div className="flex flex-col space-y-6 mx-auto w-[70%]">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-white/90 mb-1 text-lg">Email</label>
            <input
              type="email"
              name="email"
              className="
                bg-white/10
                border border-white/20
                text-white
                placeholder-white/50
                px-4 py-3
                rounded-xl
                focus:outline-none
                focus:border-white/40
                backdrop-blur-sm
              "
              placeholder="Enter Email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
             <motion.p
              className="text-red-400 text-sm h-5 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: inputEmailError ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {inputEmailError}
            </motion.p>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-white/90 mb-1 text-lg">Password</label>
            <input
              type="password"
              name="password"
              className="
                bg-white/10
                border border-white/20
                text-white
                placeholder-white/50
                px-4 py-3
                rounded-xl
                focus:outline-none
                focus:border-white/40
                backdrop-blur-sm
              "
              placeholder="Create a strong password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
         <motion.p
              className="text-red-400 text-sm h-5 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: inputPasswordError ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {inputPasswordError}
            </motion.p>
          </div>

          <button
            onClick={loginUser}
            className="
                        mt-8
                        w-full
                        py-3
                        rounded-xl
                        bg-white/10
                        text-white
                        border border-white/20
                        backdrop-blur-md
                        font-semibold
                        shadow-lg
                        transition-all
                        duration-300
                        hover:bg-white/10
                        hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
                        active:scale-95
                    "
          >
            Login
          </button>

          
         <div className="flex-row justify-center items-center text-center">
          <span>Don't have an acc ?  </span>
          <MotionLink
            className="text-blue-950 text-sm h-1  underline"
            transition={{ duration: 0.6}}
            to={"/signup"}
          >
            SignUp
          </MotionLink>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
