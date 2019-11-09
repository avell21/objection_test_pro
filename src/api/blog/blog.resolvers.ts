const blog = async (_, args, { model }) => {
  const getBlog = await model.Blog.query().findById(args.id);
  return getBlog;
};

const blogs = async (_, args, { model }) => {
  const getBlogs = await model.Blog.query().eager("user");
  return getBlogs;
};

const createBlog = async (_, args, { model }) => {
  const createBlog = await model.Blog.query().insertAndFetch({ ...args.data });
  return createBlog;
};

const updateBlog = async (_, args, { model }) => {
  const updateBlog = await model.Blog.query()
    .update({ ...args.data })
    .where("id", args.id);
  if (!updateBlog) return "blog data update failed";
  return "blog data update successfully";
};

const deleteBlog = async (_, args, { model }) => {
  const deleteBlog = await model.Blog.query().deleteById(args.id);
  if (!deleteBlog) return "blog deletion failed";
  return "blog deletion successfully";
};

export default {
  Query: {
    blog,
    blogs
  },
  Mutation: {
    createBlog,
    updateBlog,
    deleteBlog
  }
};
