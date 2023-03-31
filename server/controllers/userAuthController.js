import UserModel from '../models/userModel.js';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


var salt = bcrypt.genSaltSync(10);


export async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user)
            return res.json({ error: true, message: "No User found" })
        const userValid = bcrypt.compareSync(password, user.password);
        if (!userValid)
            return res.json({ error: true, message: "wrong Password" })
        const token = jwt.sign(
            {
                id: user._id
            },
            "myjwtsecretkey"
        )
        console.log(token)
        // const exp= new Date()+ 1000*60;
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 * 30,
            sameSite: "none",
        }).json({ error: false, user: user._id })
    }
    catch (err) {
        res.json({ message: "server error", error: err })
        console.log(err);
    }
}