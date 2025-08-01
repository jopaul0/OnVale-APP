import { Request, Response } from 'express';
import { getAdminsList, getCompaniesList } from '../services/admin.service';
import { AuthenticatedRequest } from '../middleware/auth';
import delay from '../utils/delay';

export async function getAllAdmins(req: AuthenticatedRequest, res: Response) {
    await delay(1000);
    if (req.user?.type !== 'admins') {
        return res.status(403).json({ error: true, message: 'Apenas administradores podem acessar' });
    }

    const admins = await getAdminsList();
    res.json(admins);
}

export async function getAllCompanies(req: AuthenticatedRequest, res: Response) {
    await delay(1000);
    if (req.user?.type !== 'admins') {
        return res.status(403).json({ error: true, message: 'Apenas administradores podem acessar' });
    }

    const companies = await getCompaniesList();
    res.json(companies);
}
