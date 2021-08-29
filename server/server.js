import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import indexRouter from "./routes/index.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

const app = express();
dotenv.config();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT;
mongoose.connection.once("open", () => console.log("Connected to Mongoose..."));
mongoose.connect(process.env.DATABASE_URL)
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));