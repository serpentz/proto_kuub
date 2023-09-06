import { UserAPI } from "../../Sequelize/api/index.js";

export default {
  Query: {
    users: async function () {
      return await UserAPI.getUsers();
    },
    user: async function (_, { id }, context, info) {
      return await UserAPI.findUser(id);
    },
  },
  Mutation:{
    createUser: async function (
      _,
      {user },
      context,
      info
    ) {

      return await UserAPI.createUser(user);
    },
  }
};
