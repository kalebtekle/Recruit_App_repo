// src/graphql/mutations.js
// Define GraphQL mutation for login
import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
mutation Login($username:String!,$password:String!){
    login(username:$username, password:$password){
        success
        message
        token
    }
}`

export const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!, $phone_number: String!, $role: String!) {
    registerUser(username: $username, email: $email, password: $password, phone_number: $phone_number, role: $role) {
      success
      message
    }
  }
`;


// Define the tokenAuth mutation
export const TOKEN_AUTH = gql`
  mutation TokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
    refreshExpiresIn
  }
}
`;

// Verify token
export const VERIFY_TOKEN = gql`
mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
// Define the refreshToken mutation
export const REFRESH_TOKEN = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      token
      payload
    }
  }
`;