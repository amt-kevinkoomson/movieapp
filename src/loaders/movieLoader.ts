import DataLoader from 'dataloader';
import { prisma } from '../configs/prismaConfig';

const batchMovies = async (movieIds: number[]) => {
    const movies = await prisma.movie.findMany({
        where:{
            id:{
                in:movieIds
            }
        }
    })

    const movieMap = {}
    movies.forEach((movie)=>{
        movieMap[movie.id] = movie;
    })

    return movieIds.map((id)=>movieMap[id]);
}

export const movieLoader = new DataLoader(batchMovies);
