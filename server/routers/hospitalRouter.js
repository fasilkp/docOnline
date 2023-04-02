import express from 'express'
import { addDepartment } from '../controllers/hospitalController.js';

const Router = express.Router();


Router.post("/department", addDepartment)

export default Router