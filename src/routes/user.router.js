import {Router} from 'express';
import { registerUser } from '../controllers/user.controller';

const router = Router();

router.route('/register').post(registerUser);


export default router; // this is the router which is exported to the app.js file