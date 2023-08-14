import { PrismaClient } from '@prisma/client';
import { movieLoader } from '../loaders/movieLoader';

export class MoviesDB {
  private dbConnection: PrismaClient;

  constructor(dbConnection: PrismaClient) {
    this.dbConnection = dbConnection;
  }
  private allMovies = movieLoader;

  async getAllMovies(){
    return await this.dbConnection.movie.findMany(); 
  }
  async getMovieById (movieId: number) {
    return this.allMovies.load(movieId)
  }
  async createMovie (title: string, duration: number , description: string){
    return await this.dbConnection.movie.create({
      data:{
        title:title,
        duration: duration,
        description: description
      }
    })
  }
}
