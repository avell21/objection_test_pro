const application = async (_, args, { model }) => {
  const getApplication = await model.Application.query()
    .findById(args.id)
    .eager("brokers");
  return getApplication;
};

const applications = async (_, args, { model }) => {
  const getApplications = await model.Application.query().eager("brokers");
  return getApplications;
};

const createApplication = async (_, args, { model }) => {
  const createApplication = await model.Application.query().insertAndFetch({
    ...args.data
  });
  return createApplication;
};

const updateApplication = async (_, args, { model }) => {
  const application = await model.Application.query().findById(args.id);
  // .findOne({ id: args.id });
  const updateApplication = await application
    .$query()
    .updateAndFetch({ ...args.data });
  return updateApplication;
};

const deleteApplication = async (_, args, { model }) => {
  const deleteApplication = await model.Application.query().deleteById(args.id);
  if (!deleteApplication) return "application deletion failed";
  return "application deletion successfully";
};

export default {
  Query: {
    application,
    applications
  },
  Mutation: {
    createApplication,
    updateApplication,
    deleteApplication
  }
};
