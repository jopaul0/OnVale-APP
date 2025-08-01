import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';
import { authenticateToken } from '../middleware/auth';

const AuthRouter = Router();

AuthRouter.post('/login', login);
AuthRouter.post('/register', authenticateToken, register);

export default AuthRouter;
