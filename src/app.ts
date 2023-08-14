import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import logger from './configs/winstonConfig';
import { initializeDBConnection, prisma } from './configs/prismaConfig';
import { MoviesDB } from './datasources/moviesDb';
import { UsersDB } from './datasources/usersDb';
import { PrismaClient } from '@prisma/client';
import { resolvers } from './resolvers';

export default async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await initializeDBConnection();
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    moviesDB: new MoviesDB(prisma),
                    usersDB: new UsersDB()
                }
            }
        }
    })
    
    logger.info(`Server running at ${ url }`)
}