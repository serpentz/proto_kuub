export default `
type Group {
  id: ID!
  name: String!
  amount: String!
  interval: String!
  endDate: String!
  createdAt: String!
  updatedAt: String!
  members: [User]
}

enum ResponseStatus {
  Success
  Error
}

interface ServerResponse {
  status: ResponseStatus!
  code: String
}

type ServerSuccess implements ServerResponse {
  status: ResponseStatus!
  code: String
  group: Group!
}

interface ErrorResponse {
  status: ResponseStatus!
  code: String
  message: String!
}

type ServerError implements ErrorResponse {
  status: ResponseStatus!
  code: String
  message: String!
}

union FindGroupResponse = ServerSuccess | ServerError

type Query {
  groups: [Group]
  findGroup(id: ID!): FindGroupResponse!
}
`;
