import express from 'express'
import { createChat, doctorChats, findChat, userChats } from '../controllers/chatController.js';
const router = express.Router()

router.post('/', createChat);
router.get('/:userId', userChats);
router.get('/:doctorId', doctorChats);
router.get('/find/:userId/:doctorId', findChat);

export default router