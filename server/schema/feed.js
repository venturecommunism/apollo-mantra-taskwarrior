export const feed = `

type Task {
  description: String
  uuid: String
  randomString: String
}

type Query {
  feed(id: String!): Task
  user(id: String!): User
}

`;

export default feed
