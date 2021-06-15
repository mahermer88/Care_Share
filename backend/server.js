import dotenv from "dotenv";
dotenv.config();
import express, { json, urlencoded } from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import productRoute from "./routes/products.js";
import cors from "cors";
import stripePackage from "stripe";

const PORT = process.env.PORT || "http://localhost";
const HOST = process.env.HOST || 5000;
const MONGODB_URL = process.env.MONGODB_URL;
const SECRET_KEY = process.env.SECRET_KEY;
export const stripe = stripePackage(process.env.SECRET_KEY);

app.use(cors({ origin: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

try {
  await mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  app.listen(PORT, () =>
    console.log(`Server is up and running on ${HOST}:${PORT}`)
  );
} catch (err) {
  console.error(err);
}
