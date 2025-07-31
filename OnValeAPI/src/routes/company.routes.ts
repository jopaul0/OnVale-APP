import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import * as companyController from '../controllers/company.controller';

const CompaniesRouter = Router();

CompaniesRouter.get('/me', authenticateToken, companyController.getProfile);

export default CompaniesRouter;
