import {Router} from "express";
import {getChatHistory, createChatMessage, updateChatMessage, deleteChatMessage} from "../Controllers/ChatController";

const chatRoutes= Router();

chatRoutes.get("/:elfId/chat", getChatHistory);
chatRoutes.post("/:elfId/chat", createChatMessage);
chatRoutes.put("/chat/:chatId", updateChatMessage);
chatRoutes.delete("/chat/:chatId", deleteChatMessage);

export default chatRoutes;


