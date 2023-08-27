export default `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

enum ResponseStatus {
  Success
  Error
}

# This "Book" type defines the queryable fields for every book in our data source.
type User {
  username: String!
  email: String!
}

type Group {
  id: ID!
  name: String
  amount: String
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

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  users: [User],
  groups: [Group]
  findGroup(id: ID!): FindGroupResponse!
}
`;
