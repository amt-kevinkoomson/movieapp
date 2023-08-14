import { MoviesDB } from './datasources/moviesDb'
import { UsersDB } from './datasources/usersDb'

export type DataSourceContext = {
    dataSources: {
        moviesDB: MoviesDB,
        usersDB: UsersDB
    }
}