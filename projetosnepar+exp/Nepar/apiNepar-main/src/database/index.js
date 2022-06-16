const knextfile = require("../../knexfile");
const knex = require("knex")(knextfile[process.env.NODE_ENV || "development"]);

module.exports = knex;
