// filteer
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
    { name: "bob", age: 20, position: "developer" },
    { name: "peter", age: 24, position: "designer" },
    { name: "anna", age: 20, position: "the boss" },
    { name: "john", age: 20, position: "the boss" },
  ];

  const youngPeople = people.filter(function(person){
    return person.age <= 25;
  })
  
  console.log(youngPeople);
  