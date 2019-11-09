const user = async (_, args, { model }) => {
  const getUser = await model.User.query().findById(args.id);
  return getUser;
};

const users = async (_, args, { model }) => {
  const getUsers = await model.User.query().eager("blog");
  return getUsers;
};

// const users = async (_, args, { model }) => {
//   const getUsers = await User
//   .query()
//   .where('id', '>', 1)
//   .where('id', '<', 10)
//   .where('firstName', 'ane')
//   .orderBy('lastName');
//   return getUsers;
// };

// const users = async (_, args, { model }) => {
//   const getUsers = await model.User.query()
//   return getUsers;
// };

const createUser = async (_, args, { model }) => {
  const createUser = await model.User.query().insertAndFetch({ ...args.data });
  return createUser;
};

const updateUser = async (_, args, { model }) => {
  const updateUser = await model.User.query()
    .update({ ...args.data })
    .where("id", args.id);
  if (!updateUser) return "user data update failed";
  return "user data update successfully";
};

const deleteUser = async (_, args, { model }) => {
  const deleteUser = await model.User.query().deleteById(args.id);
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
