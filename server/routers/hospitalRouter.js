import express from 'express'
import { addDepartment, addDoctor, getDepartments, getDoctors } from '../controllers/hospitalController.js';

const Router = express.Router();


Router.post("/department", addDepartment)
Router.get("/departments", getDepartments)


Router.get("/doctors", getDoctors)
Router.post("/doctor", addDoctor)



export default Router