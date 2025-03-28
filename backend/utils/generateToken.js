import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/enVars.js";

export const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn: "15d"});

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds

        // to make it available on via browser, can't access it with javascript. This is to prevent cross site scripting attacks
        httpOnly: true,
        sameSite: "strict",
        secure: ENV_VARS.NODE_ENV !== "development", // only send cookie over https in production
    } )

    return token;
}