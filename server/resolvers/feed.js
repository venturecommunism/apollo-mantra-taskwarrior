import { Random } from 'meteor/random'

export const feed = {

  Query: {
    feed(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.owner) {
        return tasks.findOne({});
      }
    },
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  Task: {
    randomString: () => Random.id(),
  }

}

export default feed
