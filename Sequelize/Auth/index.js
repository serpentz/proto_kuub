import jwt from "jsonwebtoken";
import { UserAPI } from "../api/index.js";

function encrypt(data) {
  return jwt.sign(data, "test");
}

function decrypt(token) {
  let payload, error;

  jwt.verify(token, "test", function (err, decoded) {
    if (err) {
      error = err;
    }

    payload = decoded;
  });

  return {
    payload,
    error,
  };
}

function getUser(token) {
  let user;
  let {payload, error} = decrypt(token);

  if (error) {
    return {
      error: "getUser payload not in correct format"
    }
  }

  // user = UserAPI.findUser(decodedUser.id);
  user = UserAPI.findUser(1);

  if (!user) {
    return {
      error: "getUser UserId not in database"
    }
  }

  return user;
}

function login(username, password) {

}

export { encrypt, decrypt, getUser, login };
