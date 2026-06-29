import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
//added
import {taskRoutes} from "./routers/task.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
//added
app.use("/task", taskRoutes);

export default app;