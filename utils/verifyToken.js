import jwt from "jsonwebtoken"
import { createError } from "./error.js"

// used to verify the login before do update or delete user details
export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    console.log(token)
    if(!token){
        return res.status(200).json("You are not authenticated!")
    }

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return res.status(200).json("Token is not valid!")
        req.user = user;
        next()
    })
}

export const verifyTokenForCheckLogin = (req, res, next) =>{
    const token = req.cookies.access_token;
    console.log(token)
    if(!token){
        return res.status(200).json("You are not authenticated!")
    }

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return res.status(200).json("Token is not valid!")
        res.status(200).json(user)
    })
}