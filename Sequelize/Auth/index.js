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

/**  Token decrypted schema 
{
  id: 27,
  username: 'Ozella411011',
  firstName: 'Ozella40',
  lastName: 'Ozella40',
  email: 'Ozella411011@gmail.com',
  password: 'eyJhbGciOiJIUzI1NiJ9.T3plbGxhNDExMDEx.KAFKQ-COT4bCGQFRmOXn5by6WO0JReyc4V35XFEczJ8',
  updatedAt: 2023-09-06T22:28:45.849Z,
  createdAt: 2023-09-06T22:28:45.849Z
}
 */
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
