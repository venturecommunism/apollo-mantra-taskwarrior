export const users = `

type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  randomString: String
}

type Query {
  user(id: String!): User
}

`;

export default users
