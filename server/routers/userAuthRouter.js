import express from 'express';
import { userLogin, userRegister, userRegisterVerify } from '../controllers/userAuthController.js';

const router=express.Router();

router.post("/login", userLogin)
router.post("/register", userRegister)
router.post("/register/verify", userRegisterVerify)


export default router