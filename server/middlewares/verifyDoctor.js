const verifyDoctor = async (req, res, next) => {
    try {
        const token = req.cookies.doctorToken;
        if (!token)
            return res.json({ loggedIn: false, error: true, message: "no token" });

        const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const doctor = await DoctorModel.findOne({_id:verifiedJWT.id}, { password: 0 });
        if (!doctor) {
            return res.json({ loggedIn: false });
        }
        if(doctor.block){
            return res.json({ loggedIn: false });
        }
        req.doctor=doctor;
        next()
    } catch (err) {
        console.log(err)
        res.json({ loggedIn: false, error: err });
    }
}

export default verifyDoctor