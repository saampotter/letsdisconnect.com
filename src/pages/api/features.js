import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (req, res) => {
  if (req.method == 'POST') {
    const { body } = req;
    const feature = prisma.feature.create({ data: body });

    res.statusCode(200);
    res.json({ error: false, data: { feature } });
  }
};
