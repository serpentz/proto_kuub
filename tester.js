import { UserAPI, GroupAPI } from "./Sequelize/api/index.js";
import { db } from "./Sequelize/models/index.js";

export default async function (sequelize) {
  const { User, Group, GroupUsers, Payment } = db;
  // let group = (await db.Group.findByPk(2, {include: [{model: db.User, as: 'members'}]})).toJSON()
  // console.log(JSON.stringify(group,null,2))

  // let roles = (await Group.findByPk(1, {include: [{model: User, as: "members", through: {attributes: ["role"]}}, {model: Payment, as: 'payments'}]})).toJSON()
  // let roles = (await GroupAPI.getGroup(1))
  // console.log(JSON.stringify(roles, null, 2))
  let userData = {
    username: "username",
    firstName: "firstName",
    lastName: "lastName",
    email: "email@email.com",
    password: "password",
  };

  // let groupUser = await GroupUsers.create({UserId:1, GroupId:3, role: "member"})
  // let user = await UserAPI.createUser(userData);
  //  console.log(groupUser);
}
