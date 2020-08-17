/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEndeavor = /* GraphQL */ `
  subscription OnCreateEndeavor {
    onCreateEndeavor {
      id
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
export const onUpdateEndeavor = /* GraphQL */ `
  subscription OnUpdateEndeavor {
    onUpdateEndeavor {
      id
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
export const onDeleteEndeavor = /* GraphQL */ `
  subscription OnDeleteEndeavor {
    onDeleteEndeavor {
      id
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
      id
      title
      endeavorID
      endeavor {
        id
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
      id
      title
      endeavorID
      endeavor {
        id
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
      id
      title
      endeavorID
      endeavor {
        id
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
