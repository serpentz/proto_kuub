import { format } from "../../helpers/index.js";
import { db } from "../models/index.js";

const { User, Group, Payment, Profile } = db;

export default {
  async getGroups() {
    try {
      let groups = await Group.findAll({
        include: [
          { model: User, as: "members", through: { attributes: ["role"] } },
          {
            model: User,
            as: "owner",
            include: { model: Profile, as: "profile" },
          },
          {
            model: Payment,
            as: "payments",
            include: { model: User, as: "user" },
          },
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

  async findGroup(id) {
    try {
      let group;

      group = await Group.findByPk(id, {
        include: [
          {
            model: User,
            as: "members",
            through: { attributes: ["role"] },
            include: { model: Profile, as: "profile" },
          },
          {
            model: Payment,
            as: "payments",
            include: { model: User, as: "user" },
          },
          {
            model: User,
            as: "owner",
            include: { model: Profile, as: "profile" },
          },
        ],
      });

      if (!group) {
        return null;
      }

      return format(group);
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error.message,
      };
    }
  },

  async createGroup({ amount, interval, name, endDate, OwnerId }) {
    try {
      let group;

      group = await Group.create({ amount, interval, name, endDate, OwnerId });

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
