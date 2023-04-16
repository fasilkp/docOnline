import express from 'express'
import { addDepartment, addDoctor, blockDoctor, editDepartment, editDoctor, getDepartments, getDoctors, unBlockDoctor, updateSchedule } from '../controllers/hospitalController.js';

const Router = express.Router();


Router.post("/department", addDepartment)
Router.patch("/department", editDepartment)
Router.get("/departments", getDepartments)




Router.get("/doctors", getDoctors)

Router.post("/doctor", addDoctor)
Router.patch("/doctor", editDoctor)
Router.patch("/doctor/block", blockDoctor)
Router.patch("/doctor/unblock", unBlockDoctor)
Router.patch("/doctor/schedule", updateSchedule)



export default Router