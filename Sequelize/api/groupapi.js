import { db } from "../models/index.js";

const { User, Group } = db;

export default {
  async getGroups() {
    try {
      let groups = await Group.findAll({
        include: [
          { model: db.User, as: "members", through: { attributes: ["role"] } },
        ],
      });
      if (groups) {
        groups = groups.map((el) => el.get({ plain: true }));
      }
      console.log(groups);
      return groups;
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error,
      };
    }
  },

  async getGroup(id) {
    try {
      let group;

      group = await Group.findByPk(id, {
        include: [
          { model: db.User, as: "members", through: { attributes: ["role"] } },
        ],
      });

      return group.toJSON();
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error,
      };
    }
  },
};
