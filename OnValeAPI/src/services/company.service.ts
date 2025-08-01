import prisma from '../prisma';

export async function getCompanyByIdWithDetails(id: number) {
  const company = await prisma.companies.findUnique({
    where: { id },
    include: {
      contacts: true, // inclui todos os contatos
    },
  });

  if (!company) return null;

  return {
    id: company.id,
    name: company.name,
    cnpj: company.cnpj,
    email: company.email,
    contacts: company.contacts.map((c) => ({
      id: c.id,
      name: c.name,
      email: c.email,
      phone: c.phone,
      birth_date: c.birth_date,
    })),
  };
}
