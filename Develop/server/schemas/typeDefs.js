const { gql } = require('apollo-server-express');

// TODO: Create type definitions for `Category`, `Product`, `Order` and `User` above the `Auth` type
const typeDefs = gql`
type User {
    _id: ID!
    username: String! 
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
}
type Auth {
    token: ID!
    user: User
}

input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image:String
    link: String
    title: String!
}
  type Query {
    me: User
  }

  type Mutation {
    addUser(
      username: String
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    savedBook(bookData:BookInput!):User
    removeBook(bookId:ID!):User
  }
`;

module.exports = typeDefs;