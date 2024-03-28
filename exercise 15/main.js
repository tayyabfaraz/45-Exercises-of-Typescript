var guestList = ["hamza", "ali", "fishan", "faraz"];
var dontCome = guestList[1];
console.log(dontCome, "wo nahi aaraha he");
guestList.splice(1, 1, "amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?  ")); });
