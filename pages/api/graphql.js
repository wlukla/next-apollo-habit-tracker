import { ApolloServer } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit';

import { habitsResolvers } from '../../src/api/habits/resolvers';
import { habitsMutations } from '../../src/api/habits/mutations';
import Habits from '../../src/api/habits/Habits.graphql';
import connectDb from '../../lib/mongoose';

const resolvers = mergeResolvers([habitsResolvers, habitsMutations]);

const typeDefs = mergeTypeDefs([Habits]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);
