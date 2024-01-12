import express from 'express'

const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.status(200).json({
        "msg":"welcome buddy"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on Port : ${PORT}`);
} )