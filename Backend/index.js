import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT_NUM || 5000;

const MONGODBURI = process.env.MONGODB_URI;

try {
  mongoose.connect(MONGODBURI);
  console.log("Connected to Mongo DB");
  
} catch (error) {
  console.log(error);
}

// app.get("/", (req, res) => {
//   res.send("Hello World!===Abdil");
// });

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
