const username: string = 'Nicolas'
const sum = (a: number, b: number) => a + b

sum(5,5)

// class Person {
//   age: number
//   lastName: string

//   constructor(age: number, lastName: string) {
//     this.age = age
//     this.lastName = lastName
//   }
// }

class Person {
  constructor(
    public age: number,
    private lastName: string
  ) {}
}

const nico = new Person(15, 'Molina')
console.log(nico.age)
