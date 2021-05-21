const updateUser = require("./updateUser");

describe("updateUser", () => {
  test("the file should export a function", () => {
    expect(typeof updateUser).toBe("function");
  });

  test("should take a user & newData as input and return an updated user", () => {
    const user = {
      id: 42,
      firstName: "Rein",
      lastName: "Op 't Land",
      email: "rein@rein.it",
      phoneNumber: "+31698765443",
    };

    const newData = {
      email: "rein@rein.be",
    };

    const updatedUser = updateUser(user, newData);

    expect(updatedUser).toBeDefined();
    expect(updatedUser.id).toBe(42);
    expect(updatedUser.firstName).toBe("Rein");
    expect(updatedUser.lastName).toBe("Op 't Land");
    expect(updatedUser.email).toBe("rein@rein.be");
    expect(updatedUser.phoneNumber).toBe("+31698765443");
  });

  test("The newData object should be able to contain multiple fields", () => {
    const user = {
      id: 42,
      firstName: "Rein",
      lastName: "Op 't Land",
      email: "rein@rein.it",
      phoneNumber: "+31698765443",
    };

    const newData = {
      firstName: "Jan",
      lastName: "van 't Land",
      email: "jan@jan.it",
      phoneNumber: "+31611223344",
    };

    const updatedUser = updateUser(user, newData);

    expect(updatedUser.id).toBe(42);
    expect(updatedUser.firstName).toBe("Jan");
    expect(updatedUser.lastName).toBe("van 't Land");
    expect(updatedUser.email).toBe("jan@jan.it");
    expect(updatedUser.phoneNumber).toBe("+31611223344");
  });

  test("should return a new object and not mutate the original object", () => {
    const user = {
      id: 42,
      firstName: "Rein",
      lastName: "Op 't Land",
      email: "rein@rein.it",
      phoneNumber: "+31698765443",
    };

    const newData = {
      email: "rein@rein.be",
    };

    const updatedUser = updateUser(user, newData);

    // checking here: are updatedUser and user the same object?
    // they shouldn't be, we want to avoid mutation
    expect(updatedUser === user).toBe(false);
    expect(updatedUser.id).toBe(42);
    expect(updatedUser.firstName).toBe("Rein");
    expect(updatedUser.lastName).toBe("Op 't Land");
    expect(updatedUser.email).toBe("rein@rein.be");
    expect(updatedUser.phoneNumber).toBe("+31698765443");
  });

  test("should not be allowed to change the id of a user", () => {
    const user = {
      id: 42,
      firstName: "Rein",
      lastName: "Op 't Land",
      email: "rein@rein.it",
      phoneNumber: "+31698765443",
    };

    const newData = {
      id: 9001,
    };

    const updatedUser = updateUser(user, newData);

    expect(updatedUser.id).toBe(42);
    expect(updatedUser.firstName).toBe("Rein");
    expect(updatedUser.lastName).toBe("Op 't Land");
    expect(updatedUser.email).toBe("rein@rein.it");
    expect(updatedUser.phoneNumber).toBe("+31698765443");
  });
});
