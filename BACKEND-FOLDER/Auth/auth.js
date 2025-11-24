import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();
const secret = process.env.JWT_TOKEN;

export function setUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  return jwt.sign(payload, secret, {expiresIn : '7d'} );
}

export function getUser(tokenByJWT) {
  //   return sessionIdToUserMap.get(id); // end of map

  if (!tokenByJWT) return;

  try {
    return jwt.verify(tokenByJWT, secret);
  } catch (error) {
    return null;
  }
}
