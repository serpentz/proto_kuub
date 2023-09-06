import { format } from "../../helpers/index.js";
import { decrypt } from "../Auth/index.js";
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

      return {
        __typename: "GetUserServerSuccess",
        user: format(user),
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
  async loginUser(username, password) {
    try {
      let passwordMatch, user;

      let foundUser = await User.findOne({ where: { username } });

      if (!foundUser) {
        return {
          __typename: "ServerError",
          status: "Error",
          code: "404",
          message: "Username does not exist in database.",
        };
      }

      passwordMatch = decrypt(foundUser.password).payload === password;
      

      if (!passwordMatch) {
        return {
          __typename: "ServerError",
          status: "Error",
          code: "403",
          message: "Password does not match the one in the database.",
        };
      }

      let response = await this.findUser(foundUser.id);

      return {
        __typename: "GetUserServerSuccess",
        user: response.user,
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
