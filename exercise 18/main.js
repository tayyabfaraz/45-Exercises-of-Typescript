var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countris and print its orignal order
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal order:", countriesTovisit);
//print the array in alphabetical order without modifing the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
//show that the array is stll in its orignsl order
console.log("still in orignal order:", countriesTovisit);
//print the array in reversed order without modifying the acctual array list
console.log("Reverse order:", __spreadArray([], countriesTovisit, true).reverse());
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
