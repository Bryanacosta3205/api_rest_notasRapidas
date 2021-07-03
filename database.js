const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "",
      database: "notes",
    },
    pool: {
      afterCreate: function(connection, callback) {
        connection.query('SET @@global.lc_time_names = "es_MX" ', function(err) {
          callback(err, connection);
        });
      }
   }
    
  });
  
  module.exports = knex;
  