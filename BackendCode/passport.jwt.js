let { Strategy, ExtractJwt } = require("passport-jwt");
let passport = require("passport");
let { User } = require("./user/user.model");
module.exports.configureJWTStrategy = () => {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = "ahgd123";
    //for manual signup users
    passport.use(
        new Strategy(opts, function (jwt_payload, done) {
            console.log("jwt-payload", jwt_payload);
            try {
                User.findAll({
                    limit: 1,
                    where: {
                        id: jwt_payload.id
                        //your where conditions, or without them if you need ANY entry
                    },
                }).then(function (user) {
                    //only difference is that you get users list limited to 1
                    //entries[0]
                    // if (err) {
                    //     console.log("error from passport-jwt", err)
                    //     return done(err, false);
                    // }
                    console.log(" from passport-jwt", user[0].dataValues);

                    if (user[0] && user[0].dataValues) {
                        console.log("from passport-jwt file", user[0].dataValues);

                        return done(null, user[0].dataValues);
                    } else {
                        console.log("from passport-jwt file ,not found token");

                        return done(null, false);
                        // or you could create a new account
                    }
                });

            }
            catch (e) {
                console.log("error", e);
            }

            // User.findOne({ _id: jwt_payload.id }, function (err, user) {
            //     if (err) {
            //         return done(err, false);
            //     }
            //     if (user) {
            //         console.log("from passport-jwt file", user);

            //         return done(null, user);
            //     } else {
            //         console.log("from passport-jwt file ,not found token");

            //         return done(null, false);
            //         // or you could create a new account
            //     }
            // });
        })
    );
}