import express from 'express'
import { hospitalLogin, hospitalRegister } from '../controllers/hospitalAuthController.js';

const Router = express.Router();

Router.post("/register", hospitalRegister)
Router.post("/login", hospitalLogin)


export default Router