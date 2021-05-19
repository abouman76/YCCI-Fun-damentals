// test 1:
// const updateUser = (user, newData) => {};
// module.exports = updateUser;

// test 2:
// const updateUser = (user, newData) => {
//   user.email = newData.email;

//   return user;
// };
// module.exports = updateUser;

// test 3;
// const updateUser = (user, newData) => {
//   user.firstName = newData.firstName;
//   user.lastName = newData.lastName;
//   user.email = newData.email;
//   user.phoneNumber = newData.phoneNumber;

//   return user;
// };
// module.exports = updateUser;

// test 4:
const updateUser = (user, newData) => {
  user.firstName = newData.firstName;
  user.lastName = newData.lastName;
  user.email = newData.email;
  user.phoneNumber = newData.phoneNumber;

  return user;
};
module.exports = updateUser;
