import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { format } from "../../helpers/index.js";

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

async function getUser(token) {
  let user;

  let {
    payload: { id },
    error,
  } = decrypt(token);

  if (error) {
    throw new Error(error);
  }

  if (!id) {
    throw new Error("payload has been tampered with");
  }

  user = await User.findOne({ where: { id } });

  if (!user) {
    throw new Error("There is no User associated with this token.");
  }

  return format(user);
}

export { encrypt, decrypt, getUser };
