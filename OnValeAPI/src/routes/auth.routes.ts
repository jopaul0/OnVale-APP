//LIBS
import { Router } from 'express';
import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//CREATE ROUTER
const router = Router();

//ROUTE
router.post('/company/login', async (req, res) => {
    //GET CREDENCIALS
    const { email, password } = req.body;

    try {
        const company = await prisma.companies.findUnique({ where: { email } });
        if (!company) return res.status(401).json({ message: 'Credenciais inválidas', error: true });

        const validPassword = await bcrypt.compare(password, company.password_hash);
        if (!validPassword) return res.status(401).json({ message: 'Credenciais inválidas', error: true });

        const token = jwt.sign(
            { id: company.id, type: 'company' },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: '1d' }
        );

        await prisma.sessions.create({
            data: {
                token,
                user_type: 'companies',
                user_id: company.id,
                device_info: req.headers['user-agent'] || '',
                ip_address: req.ip,
                expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
            }
        });

        res.json({ token, company: { id: company.id, name: company.name, email: company.email }, error:false });
    } catch (error) {
        res.status(500).json({ error:true, message: 'Erro interno do servidor' });
    }
});

//EXPORT ROUTER
export default router;
