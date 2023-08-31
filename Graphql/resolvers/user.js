import { UserAPI } from "../../Sequelize/api/index.js";

export default {
  Query: {
    users: async function () {
      return await UserAPI.getUsers();
    },
  },
};
