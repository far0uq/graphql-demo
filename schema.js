export const typeDefs = `#graphql
    type Game {
        id : ID!,
        title: String!,
        platform: [String!]!
        reviews: [Review],
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!, 
        game: Game!,
        author:Author!,
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review],
    }
    type Query {
        reviews: [Review],
        review(id: ID!): Review,
        games: [Game],
        game(id: ID!): Game,
        authors: [Author],
        author(id: ID!): Author,
    }
    type Mutation {
        deleteGame(id: ID!): [Game],
        addGame(game:GameFields): Game,
        updateGame(id: ID!, edits: EditFields): Game,
    }
    input GameFields {
        title: String!,
        platform: [String!]!
    }
    input EditFields {
        title: String,
        platform: [String!]
    }
`;
