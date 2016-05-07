export const root = `

type Query {
  user(id: String!): User
}

schema {
  query: Query
}

`;

export default root
