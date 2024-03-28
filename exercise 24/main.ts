
// define variable
let apple = "apple";
let upperCaseapple ="APPLE"
let ten = 10;
let twenty = 20;
let fruits =["apple", "banana","orange"];

//test for equality and inequality with strings

console.log("is apple is equal to apple");
console.log(apple == "apple");

console.log("is apple not equal to apple");

console.log(apple!= "apple");

// test using Lowercase function

console.log("\nIS APPLE is equal to apple after converting to lower case?");

console.log(upperCaseapple.toLowerCase()  == "apple");


console.log("\nIS APPLE is not equal to apple after converting to lower case?");
console.log(upperCaseapple.toLowerCase()!="apple");


//numerical tests
//equal to
console.log("\n is ten is equal to twenty?");
console.log(ten ==twenty);
//not equal to
console.log("\s is ten not equal to twenty?");
console.log(ten != twenty);

//greater than
console.log("\n is ten is greater than zero?");
console.log(ten > 0);

//less than
console.log("\n is twenty less than 10");
console.log(twenty < 10);

//greater than or equal to
console.log("\n is ten greater than or equal to 5?");
console.log(ten >= 5);


//less than or equal to
console.log("\n twenty is less than or equal to 10");
console. log(twenty <=10);

//test using "and" & "or" Operators

//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

//using || (or)
console.log("\n twenty is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n twenty is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//test wether an item is include in array
console.log(" \n is orange include in my fruits array");
console.log(fruits.includes("orange"));

//not include
console.log("\n is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
