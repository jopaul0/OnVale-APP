import { Router } from 'express';
import { getAllAdmins, getAllCompanies } from '../controllers/admin.controller';
import { authenticateToken } from '../middleware/auth';

const AdminRouter = Router();

AdminRouter.get('/admins', authenticateToken, getAllAdmins);
AdminRouter.get('/companies', authenticateToken, getAllCompanies);

export default AdminRouter;
