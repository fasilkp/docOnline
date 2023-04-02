import express from 'express'
import { getHospitalRequests } from '../controllers/adminController';

const Router = express.Router();

Router.get("/doctor/requests", getHospitalRequests)


export default Router