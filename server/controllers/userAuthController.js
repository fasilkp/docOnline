import UserModel from '../models/UserModel.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import sentOTP from '../helpers/sentOTP.js';
import crypto from 'crypto'


var salt = bcrypt.genSaltSync(10);


export async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        console.log(email, user)
        if (!user)
            return res.json({ err: true, message: "No User found" })
        if (user.block)
            return res.json({ err: true, message: "You are blocked" })
        const userValid = bcrypt.compareSync(password, user.password);
        if (!userValid)
            return res.json({ err: true, message: "wrong Password" })
        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET_KEY
        )
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 * 30,
            sameSite: "none",
        }).json({ err: false, user: user._id })
    }
    catch (err) {
        console.log(err)
        res.json({ message: "server error", err: true, error: err })
    }
}

export async function userRegister(req, res) {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.json({ err: true, message: "User Already Exist" })
        }
        let otp = Math.ceil(Math.random() * 1000000)
        let otpHash = crypto.createHmac('sha256', process.env.OTP_SECRET)
            .update(otp.toString())
            .digest('hex');
        let otpSent = await sentOTP(email, otp)
        const token = jwt.sign(
            {
                otp: otpHash
            },
            process.env.JWT_SECRET_KEY
        )
        return res.cookie("tempToken", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 10,
            sameSite: "none",
        }).json({ err: false })
    }
    catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "something went wrong" })
    }
}



export async function userRegisterVerify(req, res) {
    try {
        const { name, email, password, otp } = req.body;
        const tempToken = req.cookies.tempToken;

        if (!tempToken) {
            return res.json({ err: true, message: "OTP Session Timed Out" });
        }

        const verifiedTempToken = jwt.verify(tempToken, process.env.JWT_SECRET_KEY);
        let otpHash = crypto.createHmac('sha256', process.env.OTP_SECRET)
            .update(otp.toString())
            .digest('hex');
        if (otpHash != verifiedTempToken.otp) {
            return res.json({ err: true, message: "Invalid OTP" });
        }

        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = new UserModel({ name, email, password: hashPassword })
        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id
            },
            process.env.JWT_SECRET_KEY
        )
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: "none",
        }).json({ err: false })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err, err: true, message: "something went wrong" })
    }
}

export const checkUserLoggedIn = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token)
            return res.json({ loggedIn: false, error: true, message: "no token" });

        const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await UserModel.findById(verifiedJWT.id, { password: 0 });
        if (!user) {
            return res.json({ loggedIn: false });
        }
        if (user.block) {
            return res.json({ loggedIn: false });
        }
        return res.json({ user, loggedIn: true });
    } catch (err) {
        console.log(err)
        res.json({ loggedIn: false, error: err });
    }
}


export const userLogout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
    }).json({ message: "logged out", error: false });
}

export async function userForgot(req, res) {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ err: true, message: "User not found" })
        }
        let otp = Math.ceil(Math.random() * 1000000)
        let otpHash = crypto.createHmac('sha256', process.env.OTP_SECRET)
            .update(otp.toString())
            .digest('hex');
        let otpSent = await sentOTP(email, otp)
        const token = jwt.sign(
            {
                otp: otpHash
            },
            process.env.JWT_SECRET_KEY
        )
        return res.cookie("tempToken", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 10,
            sameSite: "none",
        }).json({ err: false })
    }
    catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "something went wrong" })
    }
}
export async function verifyForgotOtp(req, res) {
    try {
        const { otp } = req.body;
        const tempToken = req.cookies.tempToken;

        if (!tempToken) {
            return res.json({ err: true, message: "OTP Session Timed Out" });
        }

        const verifiedTempToken = jwt.verify(tempToken, process.env.JWT_SECRET_KEY);
        let otpHash = crypto.createHmac('sha256', process.env.OTP_SECRET)
            .update(otp.toString())
            .digest('hex');
        if (otpHash != verifiedTempToken.otp) {
            return res.json({ err: true, message: "Invalid OTP" });
        }
        return res.json({ err: false })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err, err: true, message: "something went wrong" })
    }
}

export async function resetUserPassword(req, res) {
    try {
        const { email, password, otp } = req.body;
        const tempToken = req.cookies.tempToken;

        if (!tempToken) {
            return res.json({ err: true, message: "OTP Session Timed Out" });
        }

        const verifiedTempToken = jwt.verify(tempToken, process.env.JWT_SECRET_KEY);
        let otpHash = crypto.createHmac('sha256', process.env.OTP_SECRET)
            .update(otp.toString())
            .digest('hex');
        if (otpHash != verifiedTempToken.otp) {
            return res.json({ err: true, message: "Invalid OTP" });
        }
        const hashPassword = bcrypt.hashSync(password, salt);


        await UserModel.updateOne({ email }, {
            $set: {
                password: hashPassword
            }
        })
        return res.json({ err: false })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err, err: true, message: "something went wrong" })
    }
}