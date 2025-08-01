import prisma from '../prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from '../utils/isEmail';
import { Request } from 'express';

//FUNCTIONS
//LOGIN
export async function handleLogin(login: string, password: string, req: Request) {
    let user: any = null;
    let userType: 'admins' | 'companies' | null = null;

    if (isEmail(login)) {
        const admin = await prisma.admins.findUnique({ where: { email: login } });
        if (admin && await bcrypt.compare(password, admin.password_hash)) {
            user = admin;
            userType = 'admins';
        }
    }

    if (!user) {
        const company = await prisma.companies.findUnique({
            where: isEmail(login) ? { email: login } : { cnpj: login },
        });

        if (company && await bcrypt.compare(password, company.password_hash)) {
            user = company;
            userType = 'companies';
        }
    }

    if (!user || !userType) {
        throw { status: 401, message: 'Credenciais inválidas' };
    }

    const token = jwt.sign(
        { id: user.id, type: userType },
        process.env.JWT_SECRET || 'secret_key',
        { expiresIn: '1d' }
    );

    await prisma.sessions.create({
        data: {
            token,
            user_type: userType,
            user_id: user.id,
            device_info: req.headers['user-agent'] || '',
            ip_address: req.ip,
            expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
    });

    return {
        token,
        account_type: userType,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        error: false,
    };
}

//CREATE COMPANY
export async function createCompany(name: string, cnpj: string, email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);

    return await prisma.companies.create({
        data: {
            name,
            cnpj,
            email,
            password_hash: hashed
        },
    });
}


//CREATE ADMIN
export async function createAdmin(name: string, email: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);

    return await prisma.admins.create({
        data: {
            name,
            email,
            password_hash: hashed
        },
    });
}