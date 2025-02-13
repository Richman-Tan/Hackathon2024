import { Request, Response } from "express";
import Chat from "../Models/Chat";

// get chat history for a specific elf
const getChatHistory = async (req: Request, res: Response) => {
	try {
		const { elfId } = req.params;
		const chatHistory = await Chat.find({ elfId }).sort({ createdAt: 1 });
		res.status(200).json(chatHistory);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// create new chat message
const createChatMessage = async (req: Request, res: Response) => {
	try {
		const { elfId } = req.params;
		const { message } = req.body;

		const chat = new Chat({ elfId, message });
		await chat.save();
		res.status(201).json(chat);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// update a chat message
const updateChatMessage = async (req: Request, res: Response) => {
	try {
		const { chatId } = req.params;
		const { message } = req.body;

		const updatedChat = await Chat.findByIdAndUpdate(chatId, { message }, { new: true });
		if (!updatedChat) return res.status(404).json({ error: "Chat message not found" });

		res.status(200).json(updatedChat);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// delete chat message or "moved on" from elf
const deleteChatMessage = async (req: Request, res: Response) => {
	try {
		const { chatId } = req.params;
		await Chat.findByIdAndDelete(chatId);
		res.status(200).json({ message: "Chat deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export { getChatHistory, createChatMessage, updateChatMessage, deleteChatMessage };
