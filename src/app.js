import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export const app = express();
const cors_options = {
  origin: process.env.CORS_ORIGINS,
  credentials: true
}

app.use(cors(cors_options));
app.use(express.json({
  limit: process.env.LIMIT,
}));

app.use(express.urlencoded({
  extended: true,
  limit: process.env.LIMIT,
}))

app.use(express.static("public"))

app.use(cookieParser())