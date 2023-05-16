import express from 'express';
import { createUser,  getAdminUser,  getUserById,  getUsers } from './user.controller';

const router = express.Router();

/*
   /
   /admins
   /:id   dynamic 
*/


router.get('/',getUsers);
router.get("/admins", getAdminUser);
router.get('/:id',getUserById);
router.post('/create-user',createUser);

export default router;