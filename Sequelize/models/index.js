"use strict";
import { Sequelize } from "sequelize";
import { User } from "./user.js";
import { Group } from "./group.js";
import { GroupUsers } from "./groupusers.js";
import { Payment } from "./payment.js";
import { Profile } from "./profile.js";
import { sequelize_connection as sequelize } from "../connection.js";

const db = {};
const models = [User, Group, GroupUsers, Payment, Profile];

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

export { db };
