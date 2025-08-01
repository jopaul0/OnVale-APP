import prisma from '../prisma';

export async function getAdminsList() {
    return await prisma.admins.findMany({
        where: { deleted_at: null },
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
}

export async function getCompaniesList() {
    return await prisma.companies.findMany({
        where: { deleted_at: null },
        select: {
            id: true,
            name: true,
            email: true,
            cnpj: true,
        },
    });
}
