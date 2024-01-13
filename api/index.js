import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/user.route.js'
import authRouter from './route/auth.route.js'
dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION) // Db Connection
.then(()=>{
    console.log("DATABASE Conncted....");
})
.catch((err)=>{
    console.log("DATABASE Connection Error "+err);
});

app.listen(process.env.PORT, ()=>{ // Server Up
    console.log(`Server is running on Port : ${process.env.PORT}`);
} )

app.use('/api/user',userRouter); 
app.use('/api/auth',authRouter); 

  