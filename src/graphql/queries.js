// src/graphql/queries.js

import gql from 'graphql-tag';

export const GET_USER_PROFILE = gql`
  query GetUserProfile($username: String!) {
    userProfile(username: $username) {
      user
      {
        username               
      }
      email
      bio
      profilePicture
      location
      birthDate
      website
      twitter
      github
      linkedin
      
    }
  }
`;





