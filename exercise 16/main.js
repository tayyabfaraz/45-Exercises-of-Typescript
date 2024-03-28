// Creating a guest list Array
var guestList = ["Usman", "Aisha", "ali", "raja"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant com
console.log(dontCome, "nahi aaskte hen");
// Add or Remove values from guest list Array
guestList.splice(0, 1, "amir");
// Message print gor Bigger Table
console.log("Good News ! we have found a bigger Table for Dinner.");
// Adding a new Value starting index of Array
guestList.unshift("faraz");
// Adding a new value at ending index of Array
guestList.push("Zain");
// Get a middle index of oue guest Array
var middleindex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleindex, 0, "hasan");
//Print message of updated list
console.log("updated List of our Guests");
// sending a invitation message to our one by one of their names
guestList.forEach(function (oneguest) { return console.log("salam bhai  ".concat(oneguest, ", would you like to dinner with me?")); });
