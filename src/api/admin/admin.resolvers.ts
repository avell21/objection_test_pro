const admin = async (_, args, { model }) => {
  const getAdmin = await model.Admin.query().findById(args.id);
  return getAdmin;
};

const admins = async (_, args, { model }) => {
  const getAdmins = await model.Admin.query();
  return getAdmins;
};

const createAdmin = async (_, args, { model }) => {
  const createAdmin = await model.Admin.query().insertAndFetch({
    ...args.data
  });
  return createAdmin;
};

const updateAdmin = async (_, args, { model }) => {
  const admin = await model.Admin.query().findById(args.id);
  // .findOne({ id: args.id });
  const updatedAdmin = await admin.$query().updateAndFetch({ ...args.data });
  return updatedAdmin;
};

const updateManyAdmin = async (_, args, { model }) => {
  const admin = await model.Admin.query().where("firstName", "String!");
  const updatedAdmin = await admin.$query().updateAndFetch({ ...args.data });
  console.log(updatedAdmin);
  return updatedAdmin;
};

const deleteAdmin = async (_, args, { model }) => {
  const deleteAdmin = await model.Admin.query().deleteById(args.id);
  if (!deleteAdmin) return "admin deletion failed";
  return "admin deletion successfully";
};

export default {
  Query: {
    admin,
    admins
  },
  Mutation: {
    createAdmin,
    updateAdmin,
    updateManyAdmin,
    deleteAdmin
  }
};
