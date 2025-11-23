import { getUser } from "../Auth/auth.js";



// this function help us to give the access to only those users who are loggedIn and exist

export async function restrictToLoggesInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;
  console.log("Cookies coming to backend:", req.cookies);


  if (!userUid) {
    console.log(userUid);
    return res.status(401).json({
      success: false,
      message: "Not logged In",
    });
  }

  const user = getUser(userUid);

  if (!user) {
    console.log(user)
    return res.status(401).json({
      success: false,
      message: "Session expired, please login again",
    });
  }
 
  req.user = user; // using this into our url controller
  next();

}


