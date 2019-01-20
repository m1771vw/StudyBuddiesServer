const express               = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// require('dotenv').load();
require('./config');

const { User, FlashCardSet } = require('./mongodb/models');

const { getUsers } = require('./graphQL/resolvers/queries')
const { addUser } = require('./graphQL/resolvers/mutations')

const typeDefs = gql`
    input UserInput {
        email: String
        displayName: String
        fullName: String
        password: String
    }

    type Card {
        term: String 
        description: String 
    }

    type User {
        email: String
        displayName: String 
        fullName: String 
        password: String

    }

    type FlashCardSet {
        setName: String
        description: String 
        creator: User 
        cardColor: String
        cards: [Card]
    }

    type Query {
        getUsers: [User]
        getFlashCardSets: [FlashCardSet]
    }

    type Mutation {
        addUser(user: UserInput): User
    }
`

const resolvers = {
    Query: {
        getUsers
    },
    Mutation: {
        addUser
    }


}

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.urlencoded({ extended: true }));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => 
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);