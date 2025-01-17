import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// for getting the cookie from the frontend
app.use(cookieParser())


const server = app.listen(port, () => {
  console.log(`server is running in port number${port}`);
});

mongoose.connect(databaseURL).then(() => {
  console.log("db connection successfully");
});
