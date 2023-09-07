import passport from "passport";
import JwtStrategy from "passport-jwt";
import { User } from "../Sequelize/models/index.js";

export default function (app, graphqlServer) {
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      User.findOne({ id: jwt_payload.UserId }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      });
    })
  );

  app.use(passport.initialize());
}
