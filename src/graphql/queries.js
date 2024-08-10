// src/graphql/queries.js

import gql from 'graphql-tag';

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    currentUser {
      username
      email
      profile {
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
  }
`;





