import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middlewares.js';
import { upload } from '../middlewares/multer.middleware.js'
import { registerUser ,loginUser,logoutUser,refreshAccessToken} from '../controllers/user.controller.js';

 




const router = Router();

//router.post("/register", registerUser);

router.post(
    "/register",
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);


router.route("/login").post(loginUser) 

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser)

router.route("/refreshtoken").post(refreshAccessToken)
 


export default router; // this is the router which is exported to the app.js file