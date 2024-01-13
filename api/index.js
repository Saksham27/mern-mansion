import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

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

app.get('/', (req,res)=>{
    res.status(200).json({
        "msg":"welcome buddy" 
    })
})

