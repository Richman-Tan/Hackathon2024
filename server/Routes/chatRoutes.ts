import {Router} from "express";
import {getChatHistory, createChatMessage, updateChatMessage, deleteChatMessage} from "../Controllers/ChatController";

const chatRoutes= Router();

chatRoutes.get("/", getChatHistory);
chatRoutes.post("/", createChatMessage);
chatRoutes.delete("/", deleteChatMessage);
chatRoutes.patch("/", updateChatMessage);

export default chatRoutes;


