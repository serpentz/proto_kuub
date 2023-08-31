import { db } from "../models/index.js";

const { User, Group } = db;
export default {
  async getUsers() {
    try {
      let users = await User.findAll({
        include: [{ model: Group, as: "groups" }],
      });
      if (users) {
        users = users.map((el) => el.get({ plain: true }));
      }
      return users;
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error,
      };
    }
  },
};
