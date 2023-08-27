import { Group } from "../Sequelize/models/group.js";
import { User } from "../Sequelize/models/user.js";

// const UsersDataPromise = new Promise((resolve, reject) => {
//   let users = User.findAll();

//   return users;
// });

const UsersDataPromise = await User.findAll({raw: true})
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((error) => {
    return {
      status: "Error",
      code: "500",
      message:
        "Unknown Error on Sequelize side. Contact lead. \n ------------ StackTrace ------------" +
        error,
    };
  });

async function GroupsData() {
  return await Group.findAll();
}

// /**
const users = [
  {
    username: "the_awakening",
    email: "KateChopin@gmail.com",
  },
  {
    username: "city_of_glass",
    email: "PaulAuster@gmail.com",
  },
];

const groups = [
  {
    id: "1",
    name: "travels",
    amount: "100",
  },
  {
    id: "2",
    name: "Large Payments",
    amount: "2000",
  },
];
// */

export { UsersDataPromise, GroupsData, users, groups };
