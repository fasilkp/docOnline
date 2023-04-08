import express from 'express'
import { addDepartment, addDoctor, editDoctor, getDepartments, getDoctors } from '../controllers/hospitalController.js';

const Router = express.Router();


Router.post("/department", addDepartment)
Router.get("/departments", getDepartments)


Router.get("/doctors", getDoctors)

Router.post("/doctor", addDoctor)
Router.patch("/doctor", editDoctor)



export default Router