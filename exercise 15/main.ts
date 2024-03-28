let guestList =["hamza", "ali", "fishan","faraz"];

let dontCome = guestList[1];

console.log(dontCome, "wo nahi aaraha he");

guestList.splice(1, 1, "amir");


guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?  `));
