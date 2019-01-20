const express               = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { User, FlashCardSet } = require('./mongodb/models');

const { } = require('./graphQL/resolvers/queries')
const { } = require('./graphQL/resolvers/mutations')