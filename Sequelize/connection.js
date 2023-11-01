import { Sequelize } from "sequelize";
import config from "./config/config.js"

// Option 3: Passing parameters separately (other dialects)
const sequelize_connection = new Sequelize(
  config["development"].database,
  config["development"].username,
  config["development"].password,
  {
    ...config.development,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

//clean up connection on instance shutdown
process.on("exit", async () => await sequelize_connection.close());

export { sequelize_connection };
