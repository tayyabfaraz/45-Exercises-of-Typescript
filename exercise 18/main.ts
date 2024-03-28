//making a array of countris and print its orignal order
let countriesTovisit: string[] = ["China","Denmark","Brazil","Argentina"];

console.log("Orignal order:", countriesTovisit );
//print the array in alphabetical order without modifing the actual array list
console.log ("Alphabetical Order:", [...countriesTovisit].sort());

//show that the array is stll in its orignsl order
console.log("still in orignal order:", countriesTovisit);

//print the array in reversed order without modifying the acctual array list
console.log("Reverse order:", [...countriesTovisit].reverse());


//show that the array is stll in its orignsl order
console.log("still in orignal order:", countriesTovisit);

//we have changed the orignal array order now
console.log("orignal array reversed:", countriesTovisit.reverse());


//print the array to show that its back to its orignal order
console.log("back to orignal order:", countriesTovisit.reverse());

//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesTovisit.sort());

//we have changed again the orignal array order now in reverse order again
console.log("orignal array reversed again:", countriesTovisit.reverse());

