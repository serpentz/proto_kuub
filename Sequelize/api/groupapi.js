import { db } from "../models/index.js";

const { User, Group, Payment } = db;

export default {
  async getGroups() {
    try {
      let groups = await Group.findAll({
        include: [
          { model: User, as: "members", through: { attributes: ["role"] } },
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
        message: error.message,
      };
    }
  },

  async getGroup(id) {
    try {
      let group;

      group = await Group.findByPk(id, {
        include: [
          { model: User, as: "members", through: { attributes: ["role"] } },
          { model: Payment, as: "payments" },
        ],
      });
      return group.toJSON();
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error.message,
      };
    }
  },

  async createGroup({ amount, interval, name }) {
    try {
      let group;

      group = Group.build({ amount, interval, name });

      return group.toJSON();
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message:  error.message,
      };
    }
  },
};
