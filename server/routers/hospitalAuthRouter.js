import express from 'express'
import { hospitalRegister } from '../controllers/hospitalAuthController';

const Router = express.Router();

Router.post("/register", hospitalRegister)


export default Router