// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

// Create an http link to your GraphQL server
const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:8000/graphql/',
});

// Create a middleware to attach the authorization token to the headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Include the token in the authorization header
    },
  };
});

// Create the Apollo Client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink), // Concatenate the auth link with the http link
  cache: new InMemoryCache(),
});

export default apolloClient;
