var personname = ("Tayyab faraz");
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
