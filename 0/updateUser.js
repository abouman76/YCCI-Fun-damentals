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
// const updateUser = (user, newData) => {
//   let newObject = { ...user, ...newData };

//   return newObject;
// };
// module.exports = updateUser;

// test 5:
// const updateUser = (user, { id, ...rest }) => {
//   let newObject = { ...user, ...rest };

//   return newObject;
// };
// module.exports = updateUser;

// test 5 korte versie
const updateUser = (user, { id, ...rest }) => {
  return { ...user, ...rest };
};
module.exports = updateUser;
