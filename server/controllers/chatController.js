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
            userId: req.params.userId,
        }).populate('doctorId');
        res.json({ err: false, chat })
    } catch (error) {
        res.json({ err: true });

    }
};

export const findChat = async (req, res) => {
    try {
        let chat = await ChatModel.findOne({
            userId: req.params.userId,
            doctorId: req.params.doctorId
        }).populate('doctorId');
        if (!chat) {
            chat = await ChatModel.create({
                userId: req.params.userId,
                doctorId: req.params.doctorId
            }).populate('doctorId')
        }
        res.json({ err: false, chat })
    } catch (error) {
        res.json({ err: true });
    }
};