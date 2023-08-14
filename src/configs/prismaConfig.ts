import { PrismaClient } from '@prisma/client';
import logger from './winstonConfig';

export const prisma = new PrismaClient({
  log: ['query', 'error'],
});

export async function initializeDBConnection() {
  try {
    await prisma.$connect();
    logger.info('Successfully connected to database');
    return prisma;
  } catch(err) {
    logger.error(err);
  }
}
