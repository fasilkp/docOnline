import express from 'express';
import { getAllDepartments, getAllDoctors, getAllHospitals } from '../controllers/userController.js';

const router=express.Router();

router.get("/departments", getAllDepartments)
router.get("/hospitals", getAllHospitals)
router.get("/doctors", getAllDoctors)



export default router