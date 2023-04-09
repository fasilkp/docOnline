import express from 'express'
import { addDepartment, addDoctor, blockDoctor, editDoctor, getDepartments, getDoctors, unBlockDoctor } from '../controllers/hospitalController.js';

const Router = express.Router();


Router.post("/department", addDepartment)
Router.get("/departments", getDepartments)


Router.get("/doctors", getDoctors)

Router.post("/doctor", addDoctor)
Router.patch("/doctor", editDoctor)
Router.patch("/doctor/block", blockDoctor)
Router.patch("/doctor/unblock", unBlockDoctor)



export default Router