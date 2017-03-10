import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type Car {
 name: String
}

# the schema allows the following query:
type Query {
  car(name: String): [Car]
}

# this schema allows the following mutation:
type Mutation {
  updateCar (
    name: String!
  ): Car
}

type Subscription {
  carUpdated: Car
}

`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
