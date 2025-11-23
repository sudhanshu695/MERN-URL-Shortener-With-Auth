import { User } from "../models/users.js";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../Auth/auth.js";

export const handleUserSignup = async (req, res) => {


  try {
    console.log("Received body:", req.body);
    const { name, email, password } = req.body;

    await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful!",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};


export const handleUserLogin = async (req, res) => {
  console.log("Received body:", req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  console.log(user);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or Password",
    });
  } 
    const sessionId = uuidv4();
    setUser(sessionId , user);
    res.cookie('uid' , sessionId);
    return res.status(201).json({
      success: true,
      message: "Login Successful",
    });
};
