"use strict";
import { Sequelize } from "sequelize";
import { User } from "./user.js";
import { Group } from "./group.js";
import { GroupUsers } from "./groupusers.js";
import { sequelize_connection as sequelize } from "../connection.js";

const db = {};
const models = [User, Group, GroupUsers];

for (let model of models) {
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
