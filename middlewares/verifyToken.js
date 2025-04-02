
import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    console.log(req.headers)
    const token = req.cookies['token']
    console.log(token)
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user_id = decoded;
    next()
}