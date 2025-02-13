import mongoose, { Schema, Document } from "mongoose";

interface IChat extends Document {
  elfId: mongoose.Schema.Types.ObjectId;
  message: string;
  timestamp: Date;
}

const ChatSchema: Schema = new Schema({
  elfId: { type: mongoose.Schema.Types.ObjectId, ref: "ElfCustomization", required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model<IChat>("Chat", ChatSchema);

export default Chat;
