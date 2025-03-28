// to make this work, we have to decode the jwt token
// take the token from the cookie and decode it
import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';

import { ENV_VARS } from '../config/enVars.js'; 

export const protectRoute = async (req, res, next) => {
    try {
        // this wont't work if you don't call the cookie parser middleware before this middleware and also at the server.js file

        const token = req.cookies["jwt-netflix"]
        if(!token){
            return res.status(401).json({success: false, message: "Unauthorized - No token provided"});

        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET); 
        if(!decoded){
            res.status(401).json({success: false, message: "Unauthorized - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password -__v -createdAt -updatedAt"); // we don't want to send the password and other fields to the client

        if(!user){
            return res.status(401).json({success: false, message: "Unauthorized - User not found"});
        }

        req.user = user;

        // this next function is from the parameters, function to perform the next route after this middleware
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: "Unauthorized - Error in protectRoute middleware"});
        
    }
}