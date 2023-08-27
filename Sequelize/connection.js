import { Sequelize } from "sequelize";
import config from "./config/config.json"  assert { type: 'json' };

// Option 3: Passing parameters separately (other dialects)
const sequelize_connection = new Sequelize("development", null, null, {
  ...config.development,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export { sequelize_connection };
