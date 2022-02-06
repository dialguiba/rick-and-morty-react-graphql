import { gql } from "@apollo/client";

export const getCharacters = gql`
  query GetCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        name
        status
        image
      }
    }
  }
`;
