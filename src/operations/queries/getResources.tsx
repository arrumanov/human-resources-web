import { gql } from "@apollo/client";

export const GET_RESOURCES = gql`
  query GetResources ($input: FilterSortInput!) {
    resources(input: $input){
      count
      list{
        id
        name
        email
      }
    }
  }
`