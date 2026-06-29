import {Router} from "express";
import {TaskController} from "../controllers/task.controller";

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.post("/", taskController.create);
taskRoutes.get("/", taskController.list);
taskRoutes.get("/:id", taskController.show);
taskRoutes.put("/:id", taskController.update);
taskRoutes.delete("/:id", taskController.delete);

export{taskRoutes};
