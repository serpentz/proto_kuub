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
  GroupUsers: GroupUsers
  payments: [Payment]
}

type GroupUsers{
  role: String!
}

type Query {
  users: [User]
}
`;
