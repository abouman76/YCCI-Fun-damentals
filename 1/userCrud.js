//TEST 1:
// const removeUser = () => {};

// const findUserById = () => {};

// const addUser = () => {};

// module.exports = { removeUser, findUserById, addUser };

// TEST 2 and TEST 3:

// const removeUser = (users, id) => {
//   const userFound = users.filter((user) => user.id !== id);
//   console.log("found", userFound);
//   return userFound;
// };
// module.exports = { removeUser };

// TEST 4:
// const findUserById = (users, id) => {
//   // console.log("users", users, "id", id);
//   const foundUser = users.find((user) => {
//     // console.log("user found", user.id, id, user.id === id)
//     return user.id === id;
//   });
//   console.log("user found?", foundUser);
//   return foundUser;
// };
// module.exports = { findUserById };

// TEST 5:
// const findUserById = (users, id) => {
//   const userFound = users.find((user) => {
//     console.log("users found", user, user.id, id, user.id === id);
//     if (!user.id) {
//     }
//   });
//   return null;
// };
// module.exports = { findUserById };

// TEST 6:
// const addUser = (users, newUser) => {
//   // console.log("USERS", users, "NEW", newUser);

//   // adding = newUser;
//   // console.log("ADD", adding);
//   users.push(newUser);
//   // console.log("index2", users[2]);
//   return users;
// };
// module.exports = { addUser };

// TEST 7
// const addUser = (users, newUser) => {
//   users.push(newUser);
//   // object = newUser
//   newUser.id = users.length; // verhoogd de het id nr.
//   return users;
// };
// module.exports = { addUser };

// TEST 8
// const addUser = (users, newUser) => {
//   const newObj = { ...newUser };
//   console.log("newObj", newObj);
//   users.push(newObj);
//   // object = newUser
//   newObj.id = users.length; // verhoogd de het id nr.
//   return users;
// };
// module.exports = { addUser };

// een verkorte syntax
const addUser = (users, newUser) => {
  return [...users, { ...newUser, id: users.length + 1 }];
};
module.exports = { addUser };
