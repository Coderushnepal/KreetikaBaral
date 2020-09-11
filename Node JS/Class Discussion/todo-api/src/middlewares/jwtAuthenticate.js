import  expressJwt from "express-jwt";

const authenticate = expressJwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
});

export default authenticate;
