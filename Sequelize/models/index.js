"use strict";
import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import process from "process";
import { default as parent_config } from "../config/config.json" assert { type: "json" };

import { fileURLToPath } from "url";
import { User } from "./user.js";
import { Group } from "./group.js";
import { GroupUsers } from "./groupusers.js";
import { sequelize_connection as sequelize } from "../connection.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
var config = parent_config[env];

export const db = {};

db["User"] = User;
db["Group"] = Group;
db["GroupUsers"] = GroupUsers;

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
