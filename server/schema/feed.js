export const feed = `

type Task {
  description: String
  uuid: String
  randomString: String
}

type Query {
  feed(description: String!): Task
  user(id: String!): User
}

`;

export default feed
