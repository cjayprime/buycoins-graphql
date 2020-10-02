import dotenv from 'dotenv';
import { ApolloServer, gql } from 'apollo-server-express';
import app from './application';
import resolvers from './resolvers';
import schema from './schema';


dotenv.config();
const port = process.env.PORT || 9000;

const typeDefs = gql`
  ${schema}
`;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});


server.applyMiddleware({ app, path: '/graphiql' });
app.listen(port, () => {
  console.info(
    `🚀 Server ready at http://localhost:${port +
    '' + server.graphqlPath}`
  );
});
