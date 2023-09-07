import { UserAPI } from "../../Sequelize/api/index.js";

export default {
  Query: {
    users: async function () {
      return await UserAPI.getUsers();
    },
    user: async function (_, { id }, context, info) {
      return await UserAPI.findUser(id);
    },
    loginUser: async function (
      _,
      { user: { username, password } },
      context,
      info
    ) {
      return await UserAPI.loginUser(username, password);
    },
  },
  Mutation: {
    createUser: async function (_, { user }, context, info) {
      return await UserAPI.createUser(user);
    },
  },
};
