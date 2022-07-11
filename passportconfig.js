const localStrategy = require('passport-local').Strategy;
const user = require('./db/User');
const bcrypt = require('bcryptjs');

exports.initializepassport = function(passport) {
     
    passport.use(new localStrategy({
        usernameField: 'email',
    }, async (username,password,done) => {
             const User = await user.findOne({email:username});


             try {
                if(!User)
             {
                return done(null,false,{message:'No user found'});
             }

                const isMatch = await bcrypt.compare(password,User.password);
                if(!isMatch)
                {
                    return done(null,false,{message:'Incorrect password'});
                }
                return done(null,User);
             } catch (error) {
                return done(error,null)
             }
             
    }))

    passport.serializeUser(function(user, done) {
        done(null,user.id);
    });

    passport.deserializeUser(async function(id, done) {
        try {
            const User = await user.findById(id);
            done(null,User);
        } catch (error) {
            done(error,false);
        }
    });
}