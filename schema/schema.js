import { makeExecutableSchema } from 'graphql-tools';
import carSchema from './cars'

import resolvers from '../resolvers/rootResolver';

export default makeExecutableSchema({
    typeDefs: carSchema,
    resolvers,
});
