import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";
import databaseConnect from "./database/index.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

// routes
app.use("/api", routes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// connect to database
databaseConnect();

app.listen(port, () => console.log(`Server Running on Port:${port}`));
