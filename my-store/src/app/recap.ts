const username: string | number = 'mpercasi';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  constructor(
    public age: number,
    public name: string,
    private lastName: string
  ) {}
}

const marcos = new Person(22, 'Marcos', 'Pérez');
