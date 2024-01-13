import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res, next)=>{ 
    console.log(req.body);
    const  {username, email, password} = req.body;

    const hashedPass = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username: username, 
        email:email, 
        password : hashedPass});
        try {
            await newUser.save();
            res.status(201).json({
                isSuccess: true,
                statusCode : 201,
                message : "user created successfully"
            });
        } catch (error) {
            next(error)
        }
    
}