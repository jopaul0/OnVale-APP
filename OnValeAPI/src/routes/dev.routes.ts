import { Router } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prisma';

const DevRouter = Router();

DevRouter.get('/create-test-admin', async (req, res) => {
    try {
        const existing = await prisma.admins.findUnique({
            where: { email: 'onvale@teste.com' },
        });

        if (existing) {
            return res.status(400).json({ error: true, message: 'Admin já existe.' });
        }

        const hashedPassword = await bcrypt.hash('123456', 10);

        const newAdmin = await prisma.admins.create({
            data: {
                name: 'Admin Teste',
                email: 'onvale@teste.com',
                password_hash: hashedPassword,
            },
        });

        res.status(201).json({
            message: '✅ Admin de teste criado com sucesso!',
            id: newAdmin.id,
            email: newAdmin.email,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: true, message: 'Erro ao criar admin de teste' });
    }
});

export default DevRouter;
