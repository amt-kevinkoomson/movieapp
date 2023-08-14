import gql from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        login(email: String!, password: String!): User
        allUsers: [User!]
        movies: [Movie!]
        movie (id: Int!): Movie!
    }

    enum MovieGenre {
        ACTION
        COMEDY
        DRAMA
        FANTASY
        ROMANCE
        HORROR
        ANIMATION
    }

    "The model for a user account"
    type User {
        id: Int!
        "The name of the user "
        name: String!
        "The user's email which will be used for login"
        email: String!
        "Hashed password"
        password: String!
        "Indication of if the user's account has been activated"
        isActive: Boolean!
        "List of movies the user has bookmarked"
        savedMovies: [Movie!]
    }

    "Model for a movie entry"
    type Movie {
        id: Int!
        "The name of the movie"
        title: String!
        "The length of the movie in minutes"
        duration: Int!
        "A brief description of the movie"
        description: String!
        "The number of views the movie has"
        views: Int!
        "The number of bookmarks the movie has"
        saves: Int!
        "Indication of whether or not the movie is trending"
        isTrending: Boolean!
        "A list of genres the movie belongs to"
        genre: [MovieGenre!]
    }

    type Mutation {
        createMovie(title: String!, duration: Int!, description: String!): CreateMovieResponse!
    }

    type CreateMovieResponse {
        code: Int!
        success: Boolean!
        message: String!
        movie: Movie
    }

`;