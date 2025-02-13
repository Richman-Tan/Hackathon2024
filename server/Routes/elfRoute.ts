import {Router} from "express";
import {getElves, createElf, getElfById} from "../Controllers/CreateElfController";
import {deleteElf} from "../Controllers/DeleteElfController";
import {updateElf} from "../Controllers/UpdateElfController";

const elfRoutes= Router();

elfRoutes.get("/", getElves);
elfRoutes.get("/", getElfById);
elfRoutes.post("/", createElf);
elfRoutes.delete("/", deleteElf);
elfRoutes.patch("/", updateElf);

export default elfRoutes;


