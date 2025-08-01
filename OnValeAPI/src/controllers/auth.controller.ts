import { Request, Response } from 'express';
import { handleLogin } from '../services/auth.service';
import delay from '../utils/delay';
import { createAdmin, createCompany } from '../services/auth.service';
import { AuthenticatedRequest } from '../middleware/auth';

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

export async function register(req: AuthenticatedRequest, res: Response) {
    await delay(2000); // simula processamento

    try {
        // Garante que apenas ADMIN pode cadastrar
        if (req.user?.type !== 'admins') {
            return res.status(403).json({ error: true, message: 'Apenas administradores podem cadastrar usuários' });
        }

        const { type, name, email, password, cnpj } = req.body;

        if (!type || !['admins', 'companies'].includes(type)) {
            return res.status(400).json({ error: true, message: 'Tipo inválido' });
        }

        if (!name || !email || !password || (type === 'companies' && !cnpj)) {
            return res.status(400).json({ error: true, message: 'Campos obrigatórios ausentes' });
        }

        const user = type === 'companies'
            ? await createCompany(name, cnpj, email, password)
            : await createAdmin(name, email, password);

        return res.status(201).json({
            message: `${type === 'companies' ? 'Empresa' : 'Administrador'} cadastrado com sucesso`,
            id: user.id,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: true, message: 'Erro ao cadastrar usuário' });
    }
}