import { toPlain } from "../../helpers/index.js";
import { db } from "../models/index.js";

const { User, Group, Payment } = db;
export default {
  async getUsers() {
    try {
      let users = await User.findAll({
        include: [
          {
            model: Group,
            as: "groups",
          },
          { model: Payment, as: "payments" },
        ],
      });
      return toPlain(users);
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error.message,
      };
    }
  },
};
