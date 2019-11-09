const broker = async (_, args, { model }) => {
  const getBroker = await model.Broker.query()
    .findById(args.id)
    .eager("applications");
  return getBroker;
};

const brokers = async (_, args, { model }) => {
  const getBrokers = await model.Broker.query().eager("applications");
  return getBrokers;
};

const createBroker = async (_, args, { model }) => {
  const createBroker = await model.Broker.query().insertAndFetch({
    ...args.data
  });
  return createBroker;
};

const updateBroker = async (_, args, { model }) => {
  const broker = await model.Broker.query().findById(args.id);
  // .findOne({ id: args.id });
  const updateBroker = await broker.$query().updateAndFetch({ ...args.data });
  return updateBroker;
};

const deleteBroker = async (_, args, { model }) => {
  const deleteBroker = await model.Broker.query().deleteById(args.id);
  if (!deleteBroker) return "broker deletion failed";
  return "broker deletion successfully";
};

export default {
  Query: {
    broker,
    brokers
  },
  Mutation: {
    createBroker,
    updateBroker,
    deleteBroker
  }
};
