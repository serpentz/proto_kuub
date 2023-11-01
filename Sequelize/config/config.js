import dotenv from "dotenv"
dotenv.config()

export default {
  "development": {
    "database": "development_kuub",
    "host": process.env.DATABASE_HOST || "127.0.0.1",
    "port":process.env.DATABASE_PORT || 5432,
    "username": "postgres",
    "password": process.env.DATABASE_PASSWORD || "toor",
    "dialect": "postgres",
    "use_env_variable": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable": true
  }
}
