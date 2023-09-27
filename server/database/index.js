import mongoose from "mongoose";

const CONNECTION_URL =
  "mongodb+srv://TeachMathEasy:Aa123456@cluster0.d9jve9k.mongodb.net/";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const databaseConnect = () => {
  mongoose
    .connect(CONNECTION_URL, options)
    .then(() => console.log("Connected to database."))
    .catch((err) =>
      console.error("Error connecting to database:", err.message)
    );
};

export default databaseConnect;
