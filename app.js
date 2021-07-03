const express = require("express"), app = express();
const ROUTES = require("./routes/routes");
      
//settings
app.set("port", process.env.PORT || 3000)
app.use(express.json())

//routes
app.use('/',ROUTES)

//server
app.listen(app.get("port"), () => {
  console.log(`Server working on port ${app.get("port")}`)
});

