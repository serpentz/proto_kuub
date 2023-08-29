import { Group } from "../Sequelize/models/group.js";
import { User } from "../Sequelize/models/user.js";

async function UsersDataPromise() {
  try {
    let users = await User.findAll({ raw: true });
    return users;
  } catch (error) {
    return {
      status: "Error",
      code: "500",
      message: error,
    };
  }
}

async function GroupsDataPromise() {
  try {
    let groups = await Group.findAll({ raw: true });
    return groups;
  } catch (error) {
    return {
      status: "Error",
      code: "500",
      message: error,
    };
  }
}

async function FindGroupPromise(id) {
  try {
    let group = await Group.findByPk(id, {include: [{model: User, as: 'members'}]});
    return group;
  } catch (error) {
    return {
      status: "Error",
      code: "500",
      message: error,
    };
  }
}

export { UsersDataPromise, GroupsDataPromise, FindGroupPromise};
