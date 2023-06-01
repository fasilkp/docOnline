import gAuth from 'passport-google-oauth2'
import passport from 'passport'
import UserModel from '../models/UserModel.js';

const GoogleStrategy = gAuth.Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
	console.log(profile)
    let user = await UserModel.findOne({ googleId: profile.id })
	if(!user){
		user= await UserModel.create({googleId:profile.id, email:profile.email})
	}
	const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY);
	return done(null, token);
  }
));