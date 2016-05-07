import { Random } from 'meteor/random';

export const users = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomUserString: () => Random.id(),
  }
}

export default users
