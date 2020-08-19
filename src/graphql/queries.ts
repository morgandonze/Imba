/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEndeavor = /* GraphQL */ `
  query GetEndeavor($id: ID!) {
    getEndeavor(id: $id) {
      id
      clientId
      title
      description
      momentum
      activities {
        items {
          id
          title
          endeavorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEndeavors = /* GraphQL */ `
  query ListEndeavors(
    $filter: ModelEndeavorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEndeavors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        title
        description
        momentum
        activities {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      title
      endeavorID
      endeavor {
        id
        clientId
        title
        description
        momentum
        activities {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        endeavorID
        endeavor {
          id
          clientId
          title
          description
          momentum
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
