//LIBS
import { Router } from 'express';
import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//UTIL
function isEmail(input: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

const AuthRouter  = Router();

AuthRouter .post('/login', async (req, res) => {
    const { login, password } = req.body;
    console.log('Dados Recebidos: ', login, password);

    try {
        let user: any = null;
        let userType: 'admins' | 'companies' | null = null;

        // 1. Tenta encontrar como admin (somente por email)
        if (isEmail(login)) {
            const admin = await prisma.admins.findUnique({ where: { email: login } });
            if (admin && await bcrypt.compare(password, admin.password_hash)) {
                user = admin;
                userType = 'admins';
            }
        }

        // 2. Se não for admin, tenta encontrar como empresa (email ou CNPJ)
        if (!user) {
            const company = await prisma.companies.findUnique({
                where: isEmail(login) ? { email: login } : { cnpj: login },
            });

            if (company && await bcrypt.compare(password, company.password_hash)) {
                user = company;
                userType = 'companies';
            }
        }

        // 3. Se ainda não encontrou...
        if (!user || !userType) {
            return res.status(401).json({ message: 'Credenciais inválidas', error: true });
        }

        console.log('Criando Token');
        // 4. Cria token
        const token = jwt.sign(
            { id: user.id, type: userType },
            process.env.JWT_SECRET || 'secret_key',
            { expiresIn: '1d' }
        );

        console.log('Salvando sessão');
        // 5. Salva sessão
        await prisma.sessions.create({
            data: {
                token,
                user_type: userType === 'companies' ? 'companies' : 'admins',
                user_id: user.id,
                device_info: req.headers['user-agent'] || '',
                ip_address: req.ip,
                expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
            },
        });

        console.log('Logado!');
        // 6. Retorna
        res.json({
            token,
            account_type: userType,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            error: false,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Erro interno do servidor' });
    }
});

export default AuthRouter ;
