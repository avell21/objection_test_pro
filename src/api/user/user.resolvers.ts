const user = async (_, args, { User }) => {
  const getUser = await User.query().findById(args.id);
  return getUser;
};

const users = async (_, args, { User }) => {
  const getUsers = await User.query();
  return getUsers;
};

const createUser = async (_, args, { User }) => {
  const createUser = await User.query().insertAndFetch({ ...args.data });
  return createUser;
};

const updateUser = async (_, args, { User }) => {
  const updateUser = await User.query()
    .update({ ...args.data })
    .where("id", args.id);
  if (!updateUser) return "user data update failed";
  return "user data update successfully";
};

const deleteUser = async (_, args, { User }) => {
  const deleteUser = await User.query().deleteById(args.id);
  if (!deleteUser) return "user deletion failed";
  return "user deletion successfully";
};

export default {
  Query: {
    user,
    users
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser
  }
};
