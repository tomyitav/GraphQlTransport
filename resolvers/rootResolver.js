import {merge} from 'lodash';
import carsRes from './cars'
import trainsRes from './trains'

const resolvers = merge({}, carsRes, trainsRes);

export default resolvers;
