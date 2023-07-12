import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($name: String!, $phone: String!, $password: String!) {
    createPerson(data: { name: $name, phone: $phone, password: $password }) {
      id
      name
      password
      phone
    }
  }
`;
