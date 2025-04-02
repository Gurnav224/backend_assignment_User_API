import jwt from "jsonwebtoken"

export const generateToken = (userId) => {
    const payload = { _id: userId };
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'24h'});
  };