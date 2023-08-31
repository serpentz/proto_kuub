import { db } from "./Sequelize/models/index.js";

export default async function (sequelize) {
  const { User, Group, GroupUsers } = db;
  // let group = (await db.Group.findByPk(2, {include: [{model: db.User, as: 'members'}]})).toJSON()
  // console.log(JSON.stringify(group,null,2))

  let roles = (await db.Group.findByPk(1, {include: [{model: db.User, as: "members", through: {attributes: ["role"]}}]})).toJSON()
  console.log(JSON.stringify(roles,null,2))

}
