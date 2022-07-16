import sequelize, { Sequelize } from "sequelize";

const db = new Sequelize("learning_crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
