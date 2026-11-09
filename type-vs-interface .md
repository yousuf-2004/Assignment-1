Type vs Interface in TypeScript

Introduction: A type alias and an Interface is connected to object but a type alias is more connected to   literals, unions, tuples and primitives.

Interfaces are built for object shapes. It can be extend with extends, and if it is declared by the same interface twice, TypeScript will merges them.Type aliases can name a primitive, a union, a literal or a tuple, and if it is being combined with &. The catch is that declaring the same type twice is an error, so merging is something only interfaces can do.

type ID = number;               // interface can't alias a primitive
type Role = "admin" | "member"; // or a union

interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = { id: 123, name: "abc", role: "admin" };

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = { species: "Felis catus", breed: "Persian" };

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = { model: "Corolla", brand: "Toyota" };

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

const employee: IEmployee = { id: 123, name: "ABC" };

// Not valid with type (duplicate identifier):
// type TEmployee = { name: string };
// type TEmployee = { id: number };


Conclusion :I use interface for object shapes and switch to type the moment I need a union or a tuple.