import { Request, Response } from 'express';
import { handleLogin } from '../services/auth.service';
import delay from '../utils/delay';

export async function login(req: Request, res: Response) {
    const { login, password } = req.body;
    await delay(2000);

    try {
        const result = await handleLogin(login, password, req);
        res.json(result);
    } catch (error: any) {
        console.error(error);
        res.status(error.status || 500).json({ error: true, message: error.message || 'Erro interno' });
    }
}
