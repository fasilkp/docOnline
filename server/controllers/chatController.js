import ChatModel from "../models/ChatModel.js";

export const createChat = async (req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const result = await newChat.save();
        res.json({ err: false, result });
    } catch (error) {
        res.json({ err: true });
    }
};


export const userChats = async (req, res) => {
    try {
        const chat = await ChatModel.find({
            members: { $in: [req.params.userId] },
        });
        res.json({err:false, chat})
    } catch (error) {
        res.json({ err: true });

    }
};