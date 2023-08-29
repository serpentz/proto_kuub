export default `
type User{
  id: ID!
  firstName: String
  lastName: String
  username: String!
  email: String!
  createdAt: String
  updatedAt: String
}

type Query {
  users: [User]
}
`;
