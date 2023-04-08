import express from 'express';
import { getAllDepartments, getAllDoctors, getAllHospitals, getDoctor, getHospital } from '../controllers/userController.js';

const router=express.Router();

router.get("/departments", getAllDepartments)
router.get("/hospitals", getAllHospitals)
router.get("/doctors", getAllDoctors)
router.get("/hospital/:id", getHospital)
router.get("/doctor/:id", getDoctor)



export default router