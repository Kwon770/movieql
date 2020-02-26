const kwon = {
  name: "Kwon",
  age: 22,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => kwon
  }
};

export default resolvers;
