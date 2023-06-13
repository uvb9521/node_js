let product_of_two_number = (a, b) => {
  return a * b;
};
console.log(product_of_two_number(10, 20));

const student = {
  name: "vishal",
  age: 23,
  greet: function () {
    return `hi i am ` + this.name;
  },
};
console.log(student.greet());
