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
//inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can invite two guests to dinner with me?");
// using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// printing a invitation to the last two guest on the list
console.log("Invitations to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//remove last two guests on the list
guestList.pop();
guestList.pop();
console.log("empty list:");
