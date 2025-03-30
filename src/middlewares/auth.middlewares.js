import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        // Debug logs
        console.log("Headers:", req.headers);
        console.log("Cookies:", req.cookies);
        
        const token = req.cookies?.accessToken || req.headers?.authorization?.split(" ")?.[1];
        
        console.log("Extracted token:", token);

        if (!token) {
            throw new ApiError(401, "Unauthorized request - No token found");
        }

        try {
            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log("Decoded token:", decodedToken);

            const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

            if (!user) {
                throw new ApiError(401, "Invalid Access Token - User not found");
            }

            req.user = user;
            next();
        } catch (error) {
            throw new ApiError(401, "Invalid access token");
        }
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});