import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";
import databaseConnect from "./database/index.js";

const port = process.env.PORT || 5000;

const app = express();

// connect to database
databaseConnect();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(port, () => console.log(`Server Running on Port:${port}`));
