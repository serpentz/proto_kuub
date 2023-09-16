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

input MakePaymentInput{
  UserId: Int!
  GroupId: Int!
  privacy: String
  amount: String!
  currency: String!
}

type MakePaymentServerSuccess {
  status: ResponseStatus!
  code: String
  payment: Payment!
}

type CancelPaymentServerSuccess {
  status: ResponseStatus!
  code: String
  payment: Payment!
}

union MakePaymentResponse = MakePaymentServerSuccess | ServerError
union CancelPaymentResponse = CancelPaymentServerSuccess | ServerError

type Query {
  getAllUserPayments: [Payment]
  getPaymentsMadeToGroup: [Payment]
}

type Mutation {
  makePayment(user: MakePaymentInput): MakePaymentResponse!
  cancelPayment(user: MakePaymentInput): CancelPaymentResponse!
}
`;
