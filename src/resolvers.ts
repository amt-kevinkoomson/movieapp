import logger from './configs/winstonConfig';
import { Resolvers } from './types';

export const resolvers: Resolvers = {
  Query: {
    //return all movies
    movies: (_, __, { dataSources }) => {
      const res = dataSources.moviesDB.getAllMovies();
      console.log(res);
      return res;
    },
    movie: (_, { id }, { dataSources }) => {
      return dataSources.moviesDB.getMovieById(id);
    },
    // login: (_, { email, password }, { dataSources })=>{

    // }
  },
  Mutation: {
    createMovie: async (_, { title, duration, description }, { dataSources })=>{
      try {
        const movie = await dataSources.moviesDB.createMovie(title, duration, description);
        return {
          code: 200,
          success: true,
          message: `Movie: ${movie.title} created successfully`,
          movie: movie
        }
      } catch(err){
        logger.error(err);
        return{
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          movie: null
        }
      }
    }
  }
};
