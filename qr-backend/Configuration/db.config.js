var mongoose = require("mongoose");
function dbConfig() {
  mongoose
    .connect(
      "mongodb+srv://garvthad:123Gaurav@cluster0.yl7bq.mongodb.net/restrauntManagament?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("error", error);
    });
}
module.exports = { dbConfig };
