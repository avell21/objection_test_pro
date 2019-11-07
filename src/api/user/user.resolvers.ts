const user = async (_, args, {}) => {
  // return await prisma.user({ id: args.id });
};

const users = async (_, args, {}) => {
  // return await prisma.users();
};

const newUser = async (_, args, {}) => {
  // return await prisma.createUser({ name: args.data.name });
};

export default {
  Query: {
    user,
    users
  },
  Mutation: {
    newUser
  }
};
