import { PrismaClient, User } from '@prisma/client';
import { prisma } from '../configs/prismaConfig';

export class UsersDB {
    private dbConnection: PrismaClient;

    constructor() {
        this.dbConnection = prisma;
    }

    // async getUser(email:string, password: string): User {

    // }
}