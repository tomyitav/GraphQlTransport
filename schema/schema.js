import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes } from 'merge-graphql-schemas';
import carSchema from './cars'
import trainSchema from './trains'

import resolvers from '../resolvers/rootResolver';

export default makeExecutableSchema({
    typeDefs: mergeTypes([carSchema, trainSchema]),
    resolvers,
});
