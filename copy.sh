# a script to copy non ts files to the build directory

cd src/api

cp schema.graphql ../../dist/src/api

cp user/user.graphql ../../dist/src/api/user

cp blog/blog.graphql ../../dist/src/api/blog

cp admin/admin.graphql ../../dist/src/api/admin

cp broker/broker.graphql ../../dist/src/api/broker