export const people = [
  { id: "1", name: "c", age: 22, gender: "male" },
  { id: "2", name: "b", age: 20, gender: "male" },
  { id: "3", name: "h", age: 49, gender: "female" },
  { id: "4", name: "n", age: 48, gender: "male" }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filteredPeople[0];
};
