import { Request, Response } from 'express';
import * as companyService from '../services/company.service';
import { AuthenticatedRequest } from '../middleware/auth';
import delay from '../utils/delay';

export async function getProfile(req: AuthenticatedRequest, res: Response) {
  await delay(2000);
  try {
    if (req.user?.type !== 'companies') {
      return res.status(403).json({ error: true, message: 'Acesso negado' });
    }

    const company = await companyService.getCompanyByIdWithDetails(req.user.id);

    if (!company) {
      return res.status(404).json({ error: true, message: 'Empresa não encontrada' });
    }

    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Erro interno do servidor' });
  }
}
