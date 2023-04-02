import express from 'express'
import { acceptHospital, getHospitalRequests, rejectHospital } from '../controllers/adminController.js';

const Router = express.Router();

Router.get("/hospital/requests", getHospitalRequests)
Router.post("/hospital/accept", acceptHospital)
Router.post("/hospital/reject", rejectHospital)


export default Router