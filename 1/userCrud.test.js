const { findUserById, addUser, removeUser } = require("./userCrud");

describe("User management", () => {
  test("the userCrud file should export functions", () => {
    expect(typeof removeUser).toBe("function");
    expect(typeof findUserById).toBe("function");
    expect(typeof addUser).toBe("function");
  });

  describe("removeUser", () => {
    test("should take an array of users and an id and return an array where the matching user is removed ", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
        {
          id: 2,
          firstName: "Bernard",
          lastName: "Wittgen",
          email: "bernard@bernard.io",
          phoneNumber: "+31687654321",
        },
        {
          id: 3,
          firstName: "Afaf",
          lastName: "Ibrahimi",
          email: "afaf@afaf.it",
          phoneNumber: "+31612345678",
        },
      ];

      const userToDelete = users[1];
      const id = userToDelete.id;

      const updatedUsers = removeUser(users, id);

      expect(updatedUsers).toBeDefined();
      expect(updatedUsers).toEqual(expect.any(Array));
      expect(updatedUsers).toContain(users[0]);
      expect(updatedUsers).toContain(users[2]);
      expect(updatedUsers.length).toBe(2);
      expect(updatedUsers).not.toContain(userToDelete);
    });

    test("should return a new array instead of a reference to the original array", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
        {
          id: 2,
          firstName: "Bernard",
          lastName: "Wittgen",
          email: "bernard@bernard.io",
          phoneNumber: "+31687654321",
        },
        {
          id: 3,
          firstName: "Afaf",
          lastName: "Ibrahimi",
          email: "afaf@afaf.it",
          phoneNumber: "+31612345678",
        },
      ];

      const userToDelete = users[1];
      const id = userToDelete.id;

      const updatedUsers = removeUser(users, id);

      // checking here: is updatedUsers the same array as users?
      // it shouldn't be.
      expect(updatedUsers).not.toBe(users);
    });
  });

  describe("findUserById", () => {
    test("should take an array of users and an id and return the matching user", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
        {
          id: 2,
          firstName: "Bernard",
          lastName: "Wittgen",
          email: "bernard@bernard.io",
          phoneNumber: "+31687654321",
        },
        {
          id: 3,
          firstName: "Afaf",
          lastName: "Ibrahimi",
          email: "afaf@afaf.it",
          phoneNumber: "+31612345678",
        },
      ];

      const id = 2;
      const user = findUserById(users, id);

      expect(user).toBeDefined();
      expect(user.firstName).toBe("Bernard");
    });

    test("should return null when no user with the id can be found", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
      ];

      const id = 2;
      const user = findUserById(users, id);

      expect(user).toBeNull();
    });
  });

  describe.only("addUser", () => {
    test("should take an array of users and the data to create a new user and return an array where the new user is added", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
        {
          id: 2,
          firstName: "Bernard",
          lastName: "Wittgen",
          email: "bernard@bernard.io",
          phoneNumber: "+31687654321",
        },
      ];

      const newUser = {
        firstName: "Afaf",
        lastName: "Ibrahimi",
        email: "afaf@afaf.it",
        phoneNumber: "+31612345678",
      };

      const updatedUsers = addUser(users, newUser);

      expect(updatedUsers).toBeDefined();
      expect(updatedUsers).toEqual(expect.any(Array));
      expect(updatedUsers.length).toBe(3);
      expect(updatedUsers[2].firstName).toBe("Afaf");
      expect(updatedUsers[2].lastName).toBe("Ibrahimi");
      expect(updatedUsers[2].email).toBe("afaf@afaf.it");
      expect(updatedUsers[2].phoneNumber).toBe("+31612345678");
    });

    test("should generate an id for the new user based on the length of the array", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
        {
          id: 2,
          firstName: "Bernard",
          lastName: "Wittgen",
          email: "bernard@bernard.io",
          phoneNumber: "+31687654321",
        },
      ];

      const newUser = {
        firstName: "Afaf",
        lastName: "Ibrahimi",
        email: "afaf@afaf.it",
        phoneNumber: "+31612345678",
      };

      const updatedUsers = addUser(users, newUser);

      expect(updatedUsers[2].id).toBe(3);
    });

    test("should return a new object for the new user instead of returning a reference to the original data", () => {
      const users = [
        {
          id: 1,
          firstName: "Rein",
          lastName: "Op 't Land",
          email: "rein@rein.be",
          phoneNumber: "+31698765443",
        },
        {
          id: 2,
          firstName: "Bernard",
          lastName: "Wittgen",
          email: "bernard@bernard.io",
          phoneNumber: "+31687654321",
        },
      ];

      const newUser = {
        firstName: "Afaf",
        lastName: "Ibrahimi",
        email: "afaf@afaf.it",
        phoneNumber: "+31612345678",
      };

      const updatedUsers = addUser(users, newUser);

      // checking here: is the last user in the array the same object as newUser?
      // it shouldn't be.
      expect(updatedUsers[2]).not.toBe(newUser);
    });
  });
});
