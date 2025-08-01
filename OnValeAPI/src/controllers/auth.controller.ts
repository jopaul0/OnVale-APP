import { Request, Response } from 'express';
import { handleLogin } from '../services/auth.service';

export async function login(req: Request, res: Response) {
    const { login, password } = req.body;

    try {
        const result = await handleLogin(login, password, req);
        res.json(result);
    } catch (error: any) {
        console.error(error);
        res.status(error.status || 500).json({ error: true, message: error.message || 'Erro interno' });
    }
}
