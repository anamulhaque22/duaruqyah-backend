const typeorm = require("typeorm");
const path = require("path");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./src/db/dua_main.sqlite",
  entities: [path.join(__dirname, "..", "models/**/*.js")],
});

module.exports = dataSource;
