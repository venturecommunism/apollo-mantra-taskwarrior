export const users = `

type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  randomUserString: String
}

`;

export default users
