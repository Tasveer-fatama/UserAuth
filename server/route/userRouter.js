import express from 'express'
import { getAllUsers,AddUsers } from '../controller/userController.js';

const router=express.Router();

router.get("/",getAllUsers)
router.post("/signup",AddUsers)

export default router;