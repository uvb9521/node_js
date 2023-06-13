// let array = ["apple", "oranges", " ", "mango", " ", "lemon"];
// let convert = array.map((fruit) => {
//   if (fruit === " ") return "empty string";
//   return fruit;
// });
// console.log(convert);

//  1

// const obj1 = { key1: 1 };
// const obj2 = { ...obj1 };
// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }

// output :- different objects
// explaination :- because the spread operator is store the reference of the obj1 into obj2.

//  2

// const obj1 = { key1: 1, key2: 2 };
// const obj2 = { ...obj1, key1: 1000 };
// console.log(obj1);
// console.log(obj2);

// output :- { key1: 1, key2: 2 }
//           { key1: 1000, key2: 2 }
