const { gql } = require('apollo-server-express');

const graphQLPlayground = gql`
    mutation addUser {
    addUser(user: {
        email:"wyang94@gmail.com",
        displayName:"wyang94",
        fullName:"William Yang",
        password:"wyang123", 
    }) {
        email displayName fullName password 
    }
    }
    mutation addUser {
    addUser(
        email:"wyang93@gmail.com",
        displayName:"wyang93", 
        fullName:"William Yang",
        password:"wyang123", 
    ) {
        email displayName fullName password 
    }
    }

    query getUsers {
    getUsers {
        email displayName fullName password
    }
    }
`