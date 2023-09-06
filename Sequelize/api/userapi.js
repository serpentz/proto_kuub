import { toPlain, format } from "../../helpers/index.js";
import { db } from "../models/index.js";
import _ from "lodash";

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
      return format(users);
    } catch (error) {
      return {
        status: "Error",
        code: "500",
        message: error.message,
      };
    }
  },
  async findUser(id) {
    try {
      let formattedResponse;
      let user = await User.findByPk(id, {
        include: [
          {
            model: Group,
            as: "groups",
            through: { attributes: ["role"] },
          },
          { model: Payment, as: "payments" },
        ],
      });
      formattedResponse = format(user);
      return {
        __typename: "GetUserServerSuccess",
        user: formattedResponse,
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
  async createUser({ username, firstName, lastName, email, password }) {
    try {
      let formattedResponse, user;
      user = User.create({ username, firstName, lastName, email, password });
      formattedResponse = format(user);
      return {
        __typename: "GetUserServerSuccess",
        user: formattedResponse,
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
