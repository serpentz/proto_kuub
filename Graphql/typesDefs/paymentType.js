export default `
type Payment {
  id: ID!
  privacy: String!
  amount: String!
  currency: String!
  createdAt: String!
  updatedAt: String!
  user: User
  group: Group
}
`;
