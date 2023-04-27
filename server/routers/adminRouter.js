import express from 'express'
import { acceptHospital, adminDashboard, blockHospital, blockUser, getAdminComplaints, getAdminReport, getDepartments, getDoctors, getHospitalRequests, getHospitals, getUsers, rejectHospital, unBlockHospital, unBlockUser } from '../controllers/adminController.js';

const Router = express.Router();

Router.get("/hospital/requests", getHospitalRequests)
Router.post("/hospital/accept", acceptHospital)
Router.post("/hospital/reject", rejectHospital)

Router.patch("/hospital/block", blockHospital)
Router.patch("/hospital/unblock", unBlockHospital)

Router.get("/departments", getDepartments)

Router.get("/hospitals", getHospitals)

Router.get("/doctors", getDoctors)

Router.get("/users", getUsers)
Router.patch("/user/block", blockUser)
Router.patch("/user/unblock", unBlockUser)

Router.get("/dashboard",adminDashboard)

Router.get("/complaints",getAdminComplaints)

Router.get("/reports",getAdminReport)


export default Router