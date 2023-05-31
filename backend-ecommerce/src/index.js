const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());

routes(app);

mongoose
  .connect(`${process.env.MONGO_DB}`, {
    auth: {
      authSource: `${process.env.DB_USER}`,
    },
    user: `${process.env.DB_USER}`,
    pass: `${process.env.DB_PASSWORD}`,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
