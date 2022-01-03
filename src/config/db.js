var mongoose = require("mongoose")
function dbConnection() {
  mongoose.connect(
    "mongodb+srv://jsguru:jsguru123@cluster0.7azk9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    function (err) {
      if (err) {
        console.log("error while connecting", err)
      } else {
        console.log("successfully connected")
      }
    }
  )
}

module.exports = dbConnection