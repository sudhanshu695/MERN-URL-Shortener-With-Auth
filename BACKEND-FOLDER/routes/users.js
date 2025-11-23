import express from 'express'
import { handleUserSignup , handleUserLogin } from '../controllers/users.js';

const UserRouter = express.Router();


UserRouter.post('/user', handleUserSignup);

UserRouter.post('/login', handleUserLogin);


export default UserRouter