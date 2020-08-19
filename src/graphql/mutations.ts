/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEndeavor = /* GraphQL */ `
  mutation CreateEndeavor(
    $input: CreateEndeavorInput!
    $condition: ModelEndeavorConditionInput
  ) {
    createEndeavor(input: $input, condition: $condition) {
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
export const updateEndeavor = /* GraphQL */ `
  mutation UpdateEndeavor(
    $input: UpdateEndeavorInput!
    $condition: ModelEndeavorConditionInput
  ) {
    updateEndeavor(input: $input, condition: $condition) {
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
export const deleteEndeavor = /* GraphQL */ `
  mutation DeleteEndeavor(
    $input: DeleteEndeavorInput!
    $condition: ModelEndeavorConditionInput
  ) {
    deleteEndeavor(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
