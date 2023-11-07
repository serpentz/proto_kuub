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
  profile: Profile
}

type Profile{
  picture:  String
  bio: String
}

input CreateUserInput {
  username: String!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

input UserLoginInput{
  username: String!
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

type CreateUserServerSuccess {
  status: ResponseStatus!
  code: String
  user: User!
  token: String!
}

union GetUserResponse = GetUserServerSuccess | ServerError
union CreateUserResponse = CreateUserServerSuccess | ServerError

type Query {
  users: [User]
  user(id: ID!): GetUserResponse!
  loginUser(user: UserLoginInput): GetUserResponse!
}

type Mutation {
  createUser(user: CreateUserInput): CreateUserResponse!
}
`;
