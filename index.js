import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { connectDB } from "./config/db.connect.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";


const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.status(200).send(`<h1>User Profile Server is Running`)
})


app.use('/auth', userRouter)



app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})