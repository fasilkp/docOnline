import express from 'express';
import { getAllDepartments, getAllHospitals } from '../controllers/userController.js';

const router=express.Router();

router.get("/departments", getAllDepartments)
router.get("/hospitals", getAllHospitals)



export default router