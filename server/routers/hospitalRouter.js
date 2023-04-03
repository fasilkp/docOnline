import express from 'express'
import { addDepartment, addDoctor, getDoctors } from '../controllers/hospitalController.js';

const Router = express.Router();


Router.post("/department", addDepartment)


Router.get("/doctors", getDoctors)
Router.post("/doctor", addDoctor)

export default Router