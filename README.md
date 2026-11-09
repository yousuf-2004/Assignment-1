# Assignment-1

This repository contains a TypeScript practice assignment focused on core language features used in modern frontend and backend development. It demonstrates how TypeScript improves code safety with typed functions, unions, tuples, generics, interfaces, classes, and asynchronous validation.

## Repository Overview

The project includes practical examples for:

- Function parameters and default values
- Union types and type guards
- Read-only tuple definitions
- Generic utility functions
- Interface-based data modeling
- Class inheritance and encapsulation
- Async functions with Promise-based validation

## Files

- `solution.ts` — TypeScript examples and exercises covering the topics above
- `type-vs-interface .md` — blog-style explanation comparing `type` aliases and `interface` declarations

## Blog Files

- [Type vs Interface](./type-vs-interface%20.md)
- [Assignment Overview](./README.md)

## Example Topics Included

- `processInput(value: string | number | boolean)` demonstrates union handling
- `formatCoordinate(location: readonly [number, number, string])` shows tuple usage
- `concatenateArrays<T>(...arrays: T[][])` demonstrates generic functions
- `Course` interface and `getPopularCourses(...)` show object modeling and filtering
- `Employee` and `Manager` classes demonstrate inheritance and encapsulation
- `validateAgeAsync(age: number)` shows async validation logic

This assignment helps build a strong foundation in TypeScript by combining syntax examples with real-world patterns.
