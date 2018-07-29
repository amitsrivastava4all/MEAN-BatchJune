const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
passport.use(new GoogleStrategy({
clientID:'1091064889060-sgm30nbff5sgigni68hkl1ua6frhbjt3.apps.googleusercontent.com',
clientSecret:'3G4W-_4QM_TnfmP9gEE8qCyq',
callbackURL:'/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    console.log("Passport Google Call Back Function.... AccessToken "+accessToken+" Ref "+refreshToken+" Profile ",profile,"Done ",done);
    console.log("Call to DB  to store data");
    return done(null,{token:accessToken,profile:profile})  ; // null represent no error
}));
 passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((user,done)=>{
    done(null,{profile:profile,t})
});
