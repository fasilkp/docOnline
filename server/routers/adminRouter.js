import express from 'express'
import { acceptHospital, getHospitalRequests } from '../controllers/adminController.js';

const Router = express.Router();

Router.get("/hospital/requests", getHospitalRequests)
Router.post("/hospital/accept", acceptHospital)


export default Router