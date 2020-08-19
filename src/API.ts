/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEndeavorInput = {
  id?: string | null,
  clientId?: string | null,
  title: string,
  description: string,
  momentum: number,
};

export type ModelEndeavorConditionInput = {
  clientId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  momentum?: ModelFloatInput | null,
  and?: Array< ModelEndeavorConditionInput | null > | null,
  or?: Array< ModelEndeavorConditionInput | null > | null,
  not?: ModelEndeavorConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEndeavorInput = {
  id: string,
  clientId?: string | null,
  title?: string | null,
  description?: string | null,
  momentum?: number | null,
};

export type DeleteEndeavorInput = {
  id?: string | null,
};

export type CreateActivityInput = {
  id?: string | null,
  title: string,
  endeavorID: string,
};

export type ModelActivityConditionInput = {
  title?: ModelStringInput | null,
  endeavorID?: ModelIDInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type UpdateActivityInput = {
  id: string,
  title?: string | null,
  endeavorID?: string | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type ModelEndeavorFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  momentum?: ModelFloatInput | null,
  and?: Array< ModelEndeavorFilterInput | null > | null,
  or?: Array< ModelEndeavorFilterInput | null > | null,
  not?: ModelEndeavorFilterInput | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  endeavorID?: ModelIDInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type CreateEndeavorMutationVariables = {
  input: CreateEndeavorInput,
  condition?: ModelEndeavorConditionInput | null,
};

export type CreateEndeavorMutation = {
  createEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEndeavorMutationVariables = {
  input: UpdateEndeavorInput,
  condition?: ModelEndeavorConditionInput | null,
};

export type UpdateEndeavorMutation = {
  updateEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEndeavorMutationVariables = {
  input: DeleteEndeavorInput,
  condition?: ModelEndeavorConditionInput | null,
};

export type DeleteEndeavorMutation = {
  deleteEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEndeavorQueryVariables = {
  id: string,
};

export type GetEndeavorQuery = {
  getEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEndeavorsQueryVariables = {
  filter?: ModelEndeavorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEndeavorsQuery = {
  listEndeavors:  {
    __typename: "ModelEndeavorConnection",
    items:  Array< {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      title: string,
      endeavorID: string,
      endeavor:  {
        __typename: "Endeavor",
        id: string,
        clientId: string | null,
        title: string,
        description: string,
        momentum: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEndeavorSubscription = {
  onCreateEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEndeavorSubscription = {
  onUpdateEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEndeavorSubscription = {
  onDeleteEndeavor:  {
    __typename: "Endeavor",
    id: string,
    clientId: string | null,
    title: string,
    description: string,
    momentum: number,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        title: string,
        endeavorID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity:  {
    __typename: "Activity",
    id: string,
    title: string,
    endeavorID: string,
    endeavor:  {
      __typename: "Endeavor",
      id: string,
      clientId: string | null,
      title: string,
      description: string,
      momentum: number,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
