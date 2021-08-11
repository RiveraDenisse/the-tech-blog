const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const express = require("express");
const app = express();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const routes = require("./routes");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
