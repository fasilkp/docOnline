import express from 'express'
import { checkHospitalLoggedIn, hospitalLogin, hospitalRegister } from '../controllers/hospitalAuthController.js';

const Router = express.Router();

Router.post("/register", hospitalRegister)
Router.post("/login", hospitalLogin)
Router.get("/check", checkHospitalLoggedIn)


export default Router