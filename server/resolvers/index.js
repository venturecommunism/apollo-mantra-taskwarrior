import users from './users'
import feed from './feed'

export const resolvers = {
  ...users,
  ...feed,
}

export default resolvers

