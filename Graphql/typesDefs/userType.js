export default `
type User{
  id: ID!
  firstName: String
  lastName: String
  username: String!
  email: String!
  createdAt: String
  updatedAt: String
  groups: [Group]
  additional: GroupUsers
  payments: [Payment]
}

input CreateUserInput {
  username: String!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

type GroupUsers{
  role: String!
}

type GetUserServerSuccess {
  status: ResponseStatus!
  code: String
  user: User!
}

union GetUserResponse = GetUserServerSuccess | ServerError

type Query {
  users: [User]
  user(id: ID!): GetUserResponse!
}

type Mutation {
  createUser(user: CreateUserInput!): GetUserResponse!
}
`;
