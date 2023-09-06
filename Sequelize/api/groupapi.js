import { format } from "../../helpers/index.js";
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
      return format(groups);
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
          { model: User, as: "owner" }
        ],
      });
      return format(group);
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error.message,
      };
    }
  },

  async createGroup({ amount, interval, name, endDate }) {
    try {
      let group;

      group = Group.create({ amount, interval, name, endDate });

      return {
        __typename: "ServerSuccess",
        group,
        status: "Success",
        code: "200",
      };
    } catch (error) {
      return {
        __typename: "ServerError",
        status: "Error",
        code: "500",
        message: error.message,
      };
    }
  },
};
