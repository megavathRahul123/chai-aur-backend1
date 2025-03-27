import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middlewares.js';
import { upload } from '../middlewares/multer.middleware.js'
import { registerUser ,loginUser} from '../controllers/user.controller.js';

 




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
 

 


export default router; // this is the router which is exported to the app.js file