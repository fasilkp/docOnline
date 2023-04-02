import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import dbConnect from './config/dbConnect.js'
import userAuthRouter from './routers/userAuthRouter.js'
import adminAuthRouter from './routers/adminAuthRouter.js'
import hospitalAuthRouter from './routers/hospitalAuthRouter.js'
import adminRouter from './routers/adminRouter.js'

const app=express();
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()+"/public"))
app.use(
  cors({
    origin: [
      "http://localhost:3000", 
    ],
    credentials: true,
  })
);
dbConnect();

app.use("/user/auth/", userAuthRouter)
app.use("/admin/auth/", adminAuthRouter)
app.use("/hospital/auth/", hospitalAuthRouter)
app.use("/admin/", adminRouter)


app.listen(5000, ()=>{
    console.log("server running on port 5000")
})