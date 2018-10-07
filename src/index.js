require("dotenv").config();
import express from "express";
import path from "path";
import morgan from "morgan";
import indexRouter from "./controllers/index";

const app = express();

// View engine config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Logs
app.use(morgan("dev"));

// Set static folder
app.use("/static", express.static("public"));

// Controllers
app.use("/", indexRouter);

// Start app on port 3000
app.listen(3000, () => console.log("App listening on port 3000!"));
