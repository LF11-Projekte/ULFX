import express from "express";
import UserController from "./controller/UserController";

const router = express.Router();

router.get("/User", async (_req: any, res: any) => {
  const controller = new UserController();
  const response = await controller.getUserById(_req.id);
  return res.send(response);
});

export default router;