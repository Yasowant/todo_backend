import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    refreshToken: String!
  }

  type Query {
    login(email: String!, password: String!): AuthPayload!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User!
  }
`);
